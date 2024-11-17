import { renderHook, waitFor } from "@testing-library/react-native";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";

import useIsLoggedIn from "../useIsLoggedIn";

import { isTokenExpired } from "@/src/utils/auth";
import { useAuth } from "@/src/components/provider/AuthProvider";

jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
  useFocusEffect: jest.fn((effect) => effect()),
}));

jest.mock("expo-secure-store", () => ({
  getItemAsync: jest.fn(),
}));

jest.mock("@/src/components/provider/AuthProvider", () => ({
  useAuth: jest.fn(),
}));

jest.mock("@/src/utils/auth", () => ({
  isTokenExpired: jest.fn(),
}));

describe("useIsLoggedIn", () => {
  const mockSetIsLoggedIn = jest.fn();
  const mockSetUserName = jest.fn();
  const mockRouterPush = jest.fn();

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({
      setIsLoggedIn: mockSetIsLoggedIn,
      setUserName: mockSetUserName,
    });
    (SecureStore.getItemAsync as jest.Mock).mockResolvedValue(null);
    (isTokenExpired as jest.Mock).mockReturnValue(false);
    (useRouter as jest.Mock).mockReturnValue({ push: mockRouterPush });

    mockSetIsLoggedIn.mockReset();
    mockSetUserName.mockReset();
    mockRouterPush.mockReset();
  });

  it("should check if the user is logged in and navigate to /dashboard if logged in", async () => {
    (SecureStore.getItemAsync as jest.Mock)
      .mockResolvedValueOnce("validAccessToken")
      .mockResolvedValueOnce("Test User");
    (isTokenExpired as jest.Mock).mockReturnValue(false);

    renderHook(() => useIsLoggedIn());

    await waitFor(() => {
      expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true);
      expect(mockSetUserName).toHaveBeenCalledWith("Test User");
      expect(mockRouterPush).toHaveBeenCalledWith("/dashboard");
    });
  });

  it("should set isLoggedIn to false and not navigate if there is no access token", async () => {
    (SecureStore.getItemAsync as jest.Mock).mockResolvedValueOnce(null);
    (isTokenExpired as jest.Mock).mockReturnValue(true);

    renderHook(() => useIsLoggedIn());

    await waitFor(() => {
      expect(mockSetIsLoggedIn).toHaveBeenCalledWith(false);
      expect(mockSetUserName).toHaveBeenCalledWith("");
      expect(mockRouterPush).not.toHaveBeenCalled();
    });
  });

  it("should set isLoggedIn to false if the token is expired", async () => {
    (SecureStore.getItemAsync as jest.Mock).mockResolvedValueOnce(
      "expiredToken",
    );
    (isTokenExpired as jest.Mock).mockReturnValue(true);

    renderHook(() => useIsLoggedIn());

    await waitFor(() => {
      expect(mockSetIsLoggedIn).toHaveBeenCalledWith(false);
      expect(mockSetUserName).toHaveBeenCalledWith("");
      expect(mockRouterPush).not.toHaveBeenCalled();
    });
  });
});
