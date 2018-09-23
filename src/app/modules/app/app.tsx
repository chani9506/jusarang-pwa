import * as React from 'react';
// import logo from '@assets/logo.svg';
import { Routes } from './routes';
import { Header } from '@app/components/org.header/header.component';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <Header/>
        <Routes/>
      </ApolloProvider>
    );
  }
}
