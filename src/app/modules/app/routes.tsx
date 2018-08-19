import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '@app/modules/home';

export class Routes extends React.Component<any, any> {
  render() {
    return (
      <Switch>
        <Route path='/' component={Home} exact={true} />
      </Switch>
    );
  }
}
