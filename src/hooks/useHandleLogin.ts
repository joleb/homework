import { useRef } from "react";

import { useMutation } from "@apollo/client";
import * as SecureStore from "expo-secure-store";

import SecureStoreKeys from "@/src/constants/SecureStoreKeys";
import LOGIN_JWT_MUTATION from "@/src/gql/mutations/loginJwt";
import LOGIN_MUTATION from "@/src/gql/mutations/login";

export const useHandleLogin = () => {
  const [loginJwt, { loading, error }] = useMutation(LOGIN_JWT_MUTATION);
  const [login] = useMutation(LOGIN_MUTATION);
  const hasError = useRef(false);

  const handleLogin = async ({
    email,
    password,
  }: {
    email?: string;
    password?: string;
  }) => {
    if (!email || !password) {
      console.error("Email and password are required");
      return false;
    }
    try {
      const { data } = await loginJwt({
        variables: {
          input: { email, password },
        },
      });
      const { data: loginData } = await login({
        variables: {
          loginInput: { email, password },
        },
      });

      if (!data || !data.Auth?.loginJwt || !loginData) {
        throw new Error("Login failed");
      }

      const {
        loginResult: {
          jwtTokens: { accessToken },
        },
      } = data.Auth.loginJwt;
      // Save credentials to reissue the token when it expires
      await SecureStore.setItemAsync(SecureStoreKeys.email, email);
      await SecureStore.setItemAsync(SecureStoreKeys.password, password);
      // Save the access token
      await SecureStore.setItemAsync(SecureStoreKeys.accessToken, accessToken);
      hasError.current = false;
      return loginData.Auth.login?.accounts[0]?.name;
    } catch (err) {
      hasError.current = true;
      console.error("Login error:", err);
      return false;
    }
  };

  return { loading, error, handleLogin, hasError: hasError.current || !!error };
};
