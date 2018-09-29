import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '@app/modules/home';
import { withLayout } from './layout.hoc';

export class Routes extends React.Component<any, any> {
  render() {
    return (
      <Switch>
        <Route path='/' component={withLayout(Home)} exact={true} />
      </Switch>
    );
  }
}
