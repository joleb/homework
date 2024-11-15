import { useColorScheme } from "react-native";

import { renderHook } from "@testing-library/react-native";

import { useThemeColor } from "../useThemeColor";

import { Colors } from "@/constants/Colors";

jest.mock("react-native", () => ({
  useColorScheme: jest.fn(),
}));

describe("useThemeColor", () => {
  it("returns the color from props for light mode", () => {
    (useColorScheme as jest.Mock).mockReturnValue("light");

    const { result } = renderHook(() =>
      useThemeColor({ light: "lightColor", dark: "darkColor" }, "primary"),
    );

    expect(result.current).toBe("lightColor");
  });

  it("returns the color from props for dark mode", () => {
    (useColorScheme as jest.Mock).mockReturnValue("dark");

    const { result } = renderHook(() =>
      useThemeColor({ light: "lightColor", dark: "darkColor" }, "primary"),
    );

    expect(result.current).toBe("darkColor");
  });

  it("returns the color from Colors for light mode when no color is provided in props", () => {
    (useColorScheme as jest.Mock).mockReturnValue("light");

    const { result } = renderHook(() => useThemeColor({}, "primary"));

    expect(result.current).toBe(Colors.light.primary);
  });

  it("returns the color from Colors for dark mode when no color is provided in props", () => {
    (useColorScheme as jest.Mock).mockReturnValue("dark");

    const { result } = renderHook(() => useThemeColor({}, "primary"));

    expect(result.current).toBe(Colors.dark.primary);
  });

  it("defaults to light mode when useColorScheme returns null", () => {
    (useColorScheme as jest.Mock).mockReturnValue(null);

    const { result } = renderHook(() => useThemeColor({}, "primary"));

    expect(result.current).toBe(Colors.light.primary);
  });
});
