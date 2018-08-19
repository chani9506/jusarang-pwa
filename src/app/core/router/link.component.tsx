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

export function Link({ to, ...others }: LinkProps) {
  const parsedProps = parseBooleanProps(others);
  return <RouterLink to={to} {...parsedProps}/>;
}
