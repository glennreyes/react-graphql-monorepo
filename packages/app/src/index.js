import React from 'react';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const uri = process.env.REACT_APP_GRAPHQL_HOST;
const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri }),
});

export const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
