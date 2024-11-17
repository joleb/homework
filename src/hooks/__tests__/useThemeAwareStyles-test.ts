import { useColorScheme } from "react-native";

import { renderHook } from "@testing-library/react-native";

import { useThemeAwareStyles } from "../useThemeAwareStyles";

import { Colors } from "@/src/constants/Colors";

jest.mock("react-native", () => ({
  useColorScheme: jest.fn(),
}));

describe("useThemeAwareStyles", () => {
  it("should return styles for light theme", () => {
    (useColorScheme as jest.Mock).mockReturnValue("light");

    const createStyles = jest.fn((colors) => ({
      backgroundColor: colors.background,
    }));

    const { result } = renderHook(() => useThemeAwareStyles(createStyles));

    expect(createStyles).toHaveBeenCalledWith(Colors.light);
    expect(result.current).toEqual({
      backgroundColor: Colors.light.background,
    });
  });

  it("should return styles for dark theme", () => {
    (useColorScheme as jest.Mock).mockReturnValue("dark");

    const createStyles = jest.fn((colors) => ({
      backgroundColor: colors.background,
    }));

    const { result } = renderHook(() => useThemeAwareStyles(createStyles));

    expect(createStyles).toHaveBeenCalledWith(Colors.dark);
    expect(result.current).toEqual({ backgroundColor: Colors.dark.background });
  });

  it("should default to light theme if useColorScheme returns null", () => {
    (useColorScheme as jest.Mock).mockReturnValue(null);

    const createStyles = jest.fn((colors) => ({
      backgroundColor: colors.background,
    }));

    const { result } = renderHook(() => useThemeAwareStyles(createStyles));

    expect(createStyles).toHaveBeenCalledWith(Colors.light);
    expect(result.current).toEqual({
      backgroundColor: Colors.light.background,
    });
  });
});
