import { renderHook, act } from "@testing-library/react-native";
import { useMutation } from "@apollo/client";
import * as SecureStore from "expo-secure-store";

import useHandleLogout from "../useHandleLogout"; // Adjust the import path

import LOGOUT_MUTATION from "@/src/gql/mutations/logout"; // Adjust the import path

// Mock Apollo Client's useMutation
jest.mock("@apollo/client", () => ({
  useMutation: jest.fn(),
}));

// Mock SecureStore from expo-secure-store
jest.mock("expo-secure-store", () => ({
  deleteItemAsync: jest.fn(),
}));

describe("useHandleLogout", () => {
  const mockLogout = jest.fn();
  const mockDeleteItemAsync = SecureStore.deleteItemAsync as jest.Mock;

  beforeEach(() => {
    (useMutation as jest.Mock).mockImplementation((mutation) => {
      if (mutation === LOGOUT_MUTATION) {
        return [mockLogout, { loading: false, error: null }];
      }
      return [jest.fn(), { loading: false, error: null }];
    });

    mockLogout.mockReset();
    mockDeleteItemAsync.mockReset();
  });

  it("should handle logout successfully and delete credentials from SecureStore", async () => {
    // Mock a successful logout mutation
    mockLogout.mockResolvedValue({ data: {} });

    const { result } = renderHook(() => useHandleLogout());

    await act(async () => {
      const logoutResult = await result.current.handleLogout();

      expect(logoutResult).toBe(true);
      expect(mockDeleteItemAsync).toHaveBeenCalledWith("ACCESS_TOKEN");
      expect(mockDeleteItemAsync).toHaveBeenCalledWith("EMAIL");
      expect(mockDeleteItemAsync).toHaveBeenCalledWith("PASSWORD");
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(null);
    });
  });

  it("should handle logout failure and return false", async () => {
    // Mock a failed logout mutation
    mockLogout.mockRejectedValue(new Error("Logout failed"));

    const { result } = renderHook(() => useHandleLogout());

    await act(async () => {
      const logoutResult = await result.current.handleLogout();

      expect(logoutResult).toBe(false);
      expect(mockDeleteItemAsync).not.toHaveBeenCalled();
    });
  });
});
