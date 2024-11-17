import { useColorScheme as useRnColorScheme } from "react-native";

import { renderHook } from "@testing-library/react-native";

import useColorScheme from "../useColorScheme";
import { SupportedThemes } from "../../constants/Colors";

jest.mock("react-native", () => ({
  useColorScheme: jest.fn(),
}));

describe("useColorScheme", () => {
  it("should return the correct theme when it is a key of SupportedThemes", () => {
    (useRnColorScheme as jest.Mock).mockReturnValue("dark");
    const { result } = renderHook(() => useColorScheme());
    expect(result.current).toBe(SupportedThemes.dark);
  });

  it("should return 'light' when theme is null", () => {
    (useRnColorScheme as jest.Mock).mockReturnValue(null);
    const { result } = renderHook(() => useColorScheme());
    expect(result.current).toBe("light");
  });

  it("should return 'light' when theme is undefined", () => {
    (useRnColorScheme as jest.Mock).mockReturnValue(undefined);
    const { result } = renderHook(() => useColorScheme());
    expect(result.current).toBe("light");
  });

  it("should return light when it is not a key of SupportedThemes", () => {
    (useRnColorScheme as jest.Mock).mockReturnValue("unknown");
    const { result } = renderHook(() => useColorScheme());
    expect(result.current).toBe("light");
  });
});
