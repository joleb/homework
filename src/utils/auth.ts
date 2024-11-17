import { jwtDecode } from "jwt-decode";
import * as SecureStore from "expo-secure-store";
import { ApolloClient } from "@apollo/client";

import LOGIN_MUTATION from "@/src/gql/mutations/loginJwt";

export const isTokenExpired = (token: string): boolean => {
  const decoded: { exp: number } = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  if (!decoded.exp) {
    return true;
  }
  return decoded.exp < currentTime;
};

export const refreshAccessToken = async (client: ApolloClient<any>) => {
  const email = await SecureStore.getItemAsync("email");
  const password = await SecureStore.getItemAsync("password");

  if (!email || !password) {
    throw new Error("No stored credentials available");
  }

  const { data } = await client.mutate({
    mutation: LOGIN_MUTATION,
    variables: {
      input: { email, password },
    },
  });

  if (!data || !data.Auth?.loginJwt) {
    throw new Error("Token refresh failed");
  }

  const { accessToken } = data.Auth.loginJwt.loginResult.jwtTokens;
  await SecureStore.setItemAsync("accessToken", accessToken);

  return accessToken;
};
