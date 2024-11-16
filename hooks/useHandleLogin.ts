import { useRef } from "react";

import { useMutation } from "@apollo/client";
import * as SecureStore from "expo-secure-store";

import SecureStoreKeys from "@/constants/SecureStoreKeys";
import LOGIN_MUTATION from "@/gql/mutations/login";

export const useHandleLogin = () => {
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);
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
      const { data } = await login({
        variables: {
          input: { email, password },
        },
      });

      if (!data || !data.Auth?.loginJwt) {
        throw new Error("Login failed");
      }

      const {
        loginResult: {
          jwtTokens: { accessToken },
        },
      } = data.Auth.loginJwt;

      // Save credentials and token
      await SecureStore.setItemAsync(SecureStoreKeys.email, email);
      await SecureStore.setItemAsync(SecureStoreKeys.password, password);
      await SecureStore.setItemAsync(SecureStoreKeys.accessToken, accessToken);
      return true;
    } catch (err) {
      hasError.current = true;
      console.error("Login error:", err);
      return false;
    }
  };

  return { loading, error, handleLogin, hasError: hasError.current || !!error };
};
