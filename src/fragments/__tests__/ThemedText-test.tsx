import React from "react";

import { render } from "@testing-library/react-native";

import { ThemedText } from "../ThemedText";
import { useThemeColor } from "../../hooks/useThemeColor";

// Mock the useThemeColor hook
jest.mock("@/src/hooks/useThemeColor");

describe("ThemedText", () => {
  it("should match snapshot", () => {
    (useThemeColor as jest.Mock).mockReturnValue("lightColor");
    const { toJSON } = render(<ThemedText>Default Text</ThemedText>);
    expect(toJSON()).toMatchSnapshot();
  });
  it("renders correctly with default type", () => {
    (useThemeColor as jest.Mock).mockReturnValue("lightColor");
    const { getByText } = render(<ThemedText>Default Text</ThemedText>);
    const textElement = getByText("Default Text");
    expect(textElement.props.style).toMatchObject({
      fontSize: 16,
      lineHeight: 24,
    });
  });

  it("renders correctly with small type", () => {
    (useThemeColor as jest.Mock).mockReturnValue("lightColor");
    const { getByText } = render(
      <ThemedText type="small">Small Text</ThemedText>,
    );
    const textElement = getByText("Small Text");
    expect(textElement.props.style).toMatchObject({
      fontSize: 14,
      lineHeight: 20,
    });
  });

  it("applies light color correctly", () => {
    (useThemeColor as jest.Mock).mockReturnValue("lightColor");
    const { getByText } = render(
      <ThemedText lightColor="lightColor">Light Color Text</ThemedText>,
    );
    const textElement = getByText("Light Color Text");
    expect(textElement.props.style).toMatchObject({ color: "lightColor" });
  });

  it("applies dark color correctly", () => {
    (useThemeColor as jest.Mock).mockReturnValue("darkColor");
    const { getByText } = render(
      <ThemedText darkColor="darkColor">Dark Color Text</ThemedText>,
    );
    const textElement = getByText("Dark Color Text");
    expect(textElement.props.style).toMatchObject({ color: "darkColor" });
  });
});
