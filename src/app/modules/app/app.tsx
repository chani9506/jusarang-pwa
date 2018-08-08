import * as React from 'react';
import logo from '@assets/logo.svg';

export class App extends React.Component {
  public render() {
    return (
      <div>
        <header>
          <img src={logo}/>
          <h1>Welcome</h1>
        </header>
        <p>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}
