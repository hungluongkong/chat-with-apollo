import React from 'react';
import ReactDOM from 'react-dom';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  from,
  split,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import * as serviceWorker from './serviceWorker';

import GraphQL from './config';
import AppChat from './App';
import './index.scss';
import ErrorBoundary from './components/ErrorBoundary';

const wsLink: WebSocketLink = new WebSocketLink({
  uri: GraphQL.WS,
  options: {
    reconnect: true,
  },
});

const httpLink: HttpLink = new HttpLink({
  uri: GraphQL.URL,
});

const splitLink: ApolloLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition'
      && definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: from([splitLink]),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ErrorBoundary>
      <AppChat />
    </ErrorBoundary>
  </ApolloProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
