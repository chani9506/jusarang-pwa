import * as React from 'react';
import logo from '@assets/logo.svg';
import { H1 } from '@app/components/atm.typography';

export class App extends React.Component {
  public render() {
    return (
      <div>
        <header>
          <img src={logo}/>
          <H1>Welcome</H1>
        </header>
        <p>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}
