import * as React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

const parseBooleanProps = props => {
  const newProps = props;
  Object.keys(props).forEach(prop => {
    if ( typeof props[prop] === 'boolean') {
      newProps[prop] = props[prop].toString();
    }
  });
  return newProps;
};

const isRelativeLink = to => {
  const pathname = typeof to === 'object' ? to.pathname : to;
  return pathname.startsWith('/');
};

const parseToProp = to => {
  const pathname = typeof to === 'object' ? to.pathname : to;
  if (!isRelativeLink(to) && !pathname.startsWith('http://') && !pathname.startsWith('https://')) {
    const parsedPathname = 'http://' + pathname;
    return typeof to === 'object' ? {
      ...to,
      pathname: parsedPathname,
    } : parsedPathname;
  }

  return to;
};

export function Link({ to, ...others }: LinkProps) {
  const parsedProps = parseBooleanProps(others);
  const parsedTo = parseToProp(to);
  return isRelativeLink(to) ?
    <RouterLink to={to} {...parsedProps}/>
    : <a href={parsedTo} {...parsedProps}/>;
}
