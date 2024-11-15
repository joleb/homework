import React from "react";

import { render } from "@testing-library/react-native";

import ThemedSeparator from "../ThemedSeparator";

import { useThemeColor } from "@/hooks/useThemeColor";

// Mock the useThemeColor hook
jest.mock("@/hooks/useThemeColor");

describe("ThemedSeparator", () => {
  it("renders correctly with light theme", () => {
    (useThemeColor as jest.Mock).mockReturnValue("lightColor");

    const { getByTestId } = render(
      <ThemedSeparator
        lightColor="lightColor"
        testID="ThemedSeparator"
        darkColor="darkColor"
      />,
    );

    const separator = getByTestId("ThemedSeparator");
    expect(separator.props.style).toStrictEqual({
      backgroundColor: "lightColor",
      height: 1,
    });
  });

  it("renders correctly with dark theme", () => {
    (useThemeColor as jest.Mock).mockReturnValue("darkColor");

    const { getByTestId } = render(
      <ThemedSeparator
        testID="ThemedSeparator"
        lightColor="lightColor"
        darkColor="darkColor"
      />,
    );

    const separator = getByTestId("ThemedSeparator");
    expect(separator.props.style).toStrictEqual({
      backgroundColor: "darkColor",
      height: 1,
    });
  });

  it("applies custom styles correctly", () => {
    (useThemeColor as jest.Mock).mockReturnValue("lightColor");

    const customStyle = { marginVertical: 10 };
    const { getByTestId } = render(
      <ThemedSeparator
        testID="ThemedSeparator"
        lightColor="lightColor"
        darkColor="darkColor"
        style={customStyle}
      />,
    );

    const separator = getByTestId("ThemedSeparator");
    expect(separator.props.style).toStrictEqual({
      height: 1,
      backgroundColor: "lightColor",
      ...customStyle,
    });
  });
});
