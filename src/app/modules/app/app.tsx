import * as React from 'react';
// import logo from '@assets/logo.svg';
import { Routes } from './routes';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ScrollDisablerProvider } from '@app/providers';
import { Provider } from 'unstated';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export class App extends React.Component {
  private scrollDisablerProvider: ScrollDisablerProvider;

  constructor(props) {
    super(props);
    this.scrollDisablerProvider = new ScrollDisablerProvider();
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Provider inject={[this.scrollDisablerProvider]}>
          <Routes/>
        </Provider>
      </ApolloProvider>
    );
  }
}
