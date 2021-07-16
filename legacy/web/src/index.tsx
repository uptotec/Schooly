import React from 'react';
import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom';

import { Routes } from './routes/index';
import { client } from './apollo';

import './index.less';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
