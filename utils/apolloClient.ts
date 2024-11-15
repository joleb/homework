import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import * as SecureStore from "expo-secure-store";

import { API_URL } from "../constants/api";

import { isTokenExpired, refreshAccessToken } from "./auth";

const httpLink = createHttpLink({
  uri: API_URL,
});

const authLink = setContext(async (_, { headers }) => {
  let token = await SecureStore.getItemAsync("accessToken");

  if (token && isTokenExpired(token)) {
    const client = new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache(),
    });
    token = await refreshAccessToken(client);
  }

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
