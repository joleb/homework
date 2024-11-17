import { useMutation } from "@apollo/client";
import * as SecureStore from "expo-secure-store";

import SecureStoreKeys from "@/src/constants/SecureStoreKeys";
import LOGOUT_MUTATION from "@/src/gql/mutations/logout";

const useHandleLogout = () => {
  const [logout, { loading, error }] = useMutation(LOGOUT_MUTATION);

  const handleLogout = async () => {
    try {
      const { data } = await logout({
        variables: {
          input: {
            clientMutationId: null,
          },
        },
      });

      if (!data) {
        throw new Error("Logout failed");
      }

      await SecureStore.deleteItemAsync(SecureStoreKeys.accessToken);
      await SecureStore.deleteItemAsync(SecureStoreKeys.email);
      await SecureStore.deleteItemAsync(SecureStoreKeys.password);
      return true;
    } catch (err) {
      console.error("Logout error:", err);
      return false;
    }
  };
  return { loading, error, handleLogout };
};

export default useHandleLogout;
