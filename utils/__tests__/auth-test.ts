import { jwtDecode } from "jwt-decode";

import { isTokenExpired } from "../auth";

jest.mock("jwt-decode");

describe("isTokenExpired", () => {
  it("should return true if the token is expired", () => {
    const token = "expiredToken";
    const decodedToken = { exp: Date.now() / 1000 - 10 }; // expired 10 seconds ago
    (jwtDecode as jest.Mock).mockReturnValue(decodedToken);

    const result = isTokenExpired(token);

    expect(result).toBe(true);
  });

  it("should return false if the token is not expired", () => {
    const token = "validToken";
    const decodedToken = { exp: Date.now() / 1000 + 10 }; // expires in 10 seconds
    (jwtDecode as jest.Mock).mockReturnValue(decodedToken);

    const result = isTokenExpired(token);

    expect(result).toBe(false);
  });

  it("should return true if the token does not have an exp field", () => {
    const token = "noExpToken";
    const decodedToken = {}; // no exp field
    (jwtDecode as jest.Mock).mockReturnValue(decodedToken);

    const result = isTokenExpired(token);

    expect(result).toBe(true);
  });
});
