import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import * as SecureStore from 'expo-secure-store';

import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import { API_URL } from '../constants/api';


if (__DEV__) {
  // add dev messages to the Apollo Client
  loadDevMessages();
  loadErrorMessages();
}

const httpLink = createHttpLink({
  uri:API_URL,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await SecureStore.getItemAsync('accessToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;