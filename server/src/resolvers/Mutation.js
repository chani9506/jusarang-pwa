const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils');

async function signup(parent, args, context, info) {
  const userExists = await context.db.exists.User({
    email: args.email,
  });

  if (userExists) {
    throw new Error(`User already exists: ${args.email}`)
  }

  const password = await bcrypt.hash(args.password, 10);

  const role = args.role ? args.role : 'member';

  const user = await context.db.mutation.createUser({
    data: { role, ...args, password },
  }, `{ id }`);

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  const user = await context.db.query.user({ where: { email: args.email } }, ` { id password } `);
  if (!user) {
    throw new Error('No such user found')
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user,
  }
}

function post(parent, args, context, info) {
  const userId = getUserId(context);
  return context.db.mutation.createLink({
    data: {
      url: args.url,
      description: args.description,
      postedBy: { connect: { id: userId } },
    },
  }, info);
}

async function vote(parent, args, context, info) {
  const userId = getUserId(context);

  const linkExists = await context.db.exists.Vote({
    user: { id: userId },
    link: { id: args.linkId },
  });
  if (linkExists) {
    throw new Error(`Already voted for link: ${args.linkId}`)
  }

  return context.db.mutation.createVote({
    data: {
      user: { connect: { id: userId } },
      link: { connect: { id: args.linkId } },
    },
  }, info)
}

async function addFarmMembers(parent, args, context, info) {
  const farmExists = await context.db.exists.Group({
    id: args.farmId,
    type: 'farm'
  });

  if (!farmExists) {
    throw new Error(`Invalid Farm Id: ${args.farmId}`)
  }

  const userIds = await args.userIds.map((userId) => ({
    id: userId
  }));

  return context.db.mutation.updateGroup({
    data: {
      users: { connect: userIds }
    },
    where: {
      id: args.farmId
    }
  }, info)
}

module.exports = {
  addFarmMembers,
  signup,
  login,
  post,
  vote
}