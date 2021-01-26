import React from 'react';
import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom';

import { client } from './apollo';
import { Routes } from './routes';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
