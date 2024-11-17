import { useCallback } from "react";

import { useRouter, useFocusEffect } from "expo-router";
import * as SecureStore from "expo-secure-store";

import { useAuth } from "../components/provider/AuthProvider";

import SecureStoreKeys from "@/src/constants/SecureStoreKeys";
import { isTokenExpired } from "@/src/utils/auth";

const useIsLoggedIn = () => {
  const router = useRouter();
  const { setIsLoggedIn, setUserName } = useAuth();
  const checkIfLoggedIn = useCallback(async () => {
    const accessToken = await SecureStore.getItemAsync(
      SecureStoreKeys.accessToken,
    );
    const name = await SecureStore.getItemAsync(SecureStoreKeys.userName);
    const isLoggedIn = !!accessToken && !isTokenExpired(accessToken);
    setIsLoggedIn(isLoggedIn);
    setUserName(name || "");
    if (isLoggedIn) {
      router.push("/dashboard");
    }
  }, [setIsLoggedIn, setUserName, router]);
  useFocusEffect(
    useCallback(() => {
      checkIfLoggedIn();
    }, [checkIfLoggedIn]),
  );
};

export default useIsLoggedIn;
