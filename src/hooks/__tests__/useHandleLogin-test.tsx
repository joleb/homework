import { renderHook, act } from "@testing-library/react-native";
import { useMutation } from "@apollo/client";
import * as SecureStore from "expo-secure-store";

import { useHandleLogin } from "../useHandleLogin";

import LOGIN_JWT_MUTATION from "@/src/gql/mutations/loginJwt";
import LOGIN_MUTATION from "@/src/gql/mutations/login";

jest.mock("@apollo/client", () => ({
  useMutation: jest.fn(),
}));

jest.mock("expo-secure-store", () => ({
  setItemAsync: jest.fn(),
}));

describe("useHandleLogin", () => {
  const mockLoginJwt = jest.fn();
  const mockLogin = jest.fn();
  const mockSetItemAsync = SecureStore.setItemAsync as jest.Mock;

  beforeEach(() => {
    (useMutation as jest.Mock).mockImplementation((mutation) => {
      if (mutation === LOGIN_JWT_MUTATION) {
        return [mockLoginJwt, { loading: false, error: null }];
      }
      if (mutation === LOGIN_MUTATION) {
        return [mockLogin, { loading: false, error: null }];
      }
      return [jest.fn(), { loading: false, error: null }];
    });

    mockLoginJwt.mockReset();
    mockLogin.mockReset();
    mockSetItemAsync.mockReset();
  });

  it("should handle login successfully and store credentials", async () => {
    const mockJwtData = {
      Auth: {
        loginJwt: {
          loginResult: {
            jwtTokens: { accessToken: "mockAccessToken" },
          },
        },
      },
    };
    const mockLoginData = {
      Auth: {
        login: {
          accounts: [{ name: "Test Account" }],
        },
      },
    };

    mockLoginJwt.mockResolvedValue({ data: mockJwtData });
    mockLogin.mockResolvedValue({ data: mockLoginData });

    const { result } = renderHook(() => useHandleLogin());

    await act(async () => {
      const accountName = await result.current.handleLogin({
        email: "test@example.com",
        password: "password123",
      });

      expect(accountName).toBe("Test Account");
      expect(mockSetItemAsync).toHaveBeenCalledWith(
        "EMAIL",
        "test@example.com",
      );
      expect(mockSetItemAsync).toHaveBeenCalledWith("PASSWORD", "password123");
      expect(mockSetItemAsync).toHaveBeenCalledWith(
        "ACCESS_TOKEN",
        "mockAccessToken",
      );

      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(null);
    });
  });

  it("should return false if email or password is missing", async () => {
    const { result } = renderHook(() => useHandleLogin());

    await act(async () => {
      const loginResult = await result.current.handleLogin({
        email: "",
        password: "password123",
      });
      expect(loginResult).toBe(false);

      const loginResult2 = await result.current.handleLogin({
        email: "test@example.com",
        password: "",
      });
      expect(loginResult2).toBe(false);
    });
  });
});
