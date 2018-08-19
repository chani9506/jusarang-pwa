import * as React from 'react';
// import logo from '@assets/logo.svg';
import { Routes } from './routes';
import { Header } from '@app/components/org.header/header.component';

export class App extends React.Component {
  public render() {
    return (
      <>
        <Header/>
        <Routes/>
      </>
    );
  }
}
