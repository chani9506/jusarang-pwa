const { Prisma } = require('prisma-binding');
const { GraphQLServer } = require('graphql-yoga');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Subscription = require('./resolvers/Subscription');
const AuthPayload = require('./resolvers/AuthPayload');
const Feed = require('./resolvers/Feed');

const resolvers = {
  Query,
  Mutation,
  Subscription,
  AuthPayload,
  Feed
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://us1.prisma.sh/chanyee-kim/database/dev',
      secret: 'mysecret123',
      debug: true,
    })
  })
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
 