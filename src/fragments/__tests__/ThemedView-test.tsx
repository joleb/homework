import React from "react";

import { render } from "@testing-library/react-native";

import { ThemedView } from "../ThemedView";

import { useThemeColor } from "@/src/hooks/useThemeColor";

jest.mock("@/src/hooks/useThemeColor");

describe("ThemedView", () => {
  it("renders correctly with light theme", () => {
    (useThemeColor as jest.Mock).mockReturnValue("light-background-color");

    const { getByTestId } = render(
      <ThemedView
        lightColor="light-color"
        darkColor="dark-color"
        testID="themed-view"
      />,
    );

    const view = getByTestId("themed-view");
    expect(view.props.style).toContainEqual({
      backgroundColor: "light-background-color",
    });
  });

  it("renders correctly with dark theme", () => {
    (useThemeColor as jest.Mock).mockReturnValue("dark-background-color");

    const { getByTestId } = render(
      <ThemedView
        lightColor="light-color"
        darkColor="dark-color"
        testID="themed-view"
      />,
    );

    const view = getByTestId("themed-view");
    expect(view.props.style).toContainEqual({
      backgroundColor: "dark-background-color",
    });
  });

  it("applies additional styles", () => {
    (useThemeColor as jest.Mock).mockReturnValue("background-color");

    const { getByTestId } = render(
      <ThemedView style={{ padding: 10 }} testID="themed-view" />,
    );

    const view = getByTestId("themed-view");
    expect(view.props.style).toContainEqual({
      backgroundColor: "background-color",
    });
    expect(view.props.style).toContainEqual({ padding: 10 });
  });
});
