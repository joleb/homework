import React from "react";
import { Text } from "react-native";

import { render, fireEvent } from "@testing-library/react-native";

import PressableOpacity from "../PressableOpacity";

describe("PressableOpacity", () => {
  it("matches snapshot", () => {
    const { toJSON } = render(
      <PressableOpacity onPress={() => {}}>
        <Text>Press me</Text>
      </PressableOpacity>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
  it("renders children correctly", () => {
    const { getByText } = render(
      <PressableOpacity onPress={() => {}}>
        <Text>Press me</Text>
      </PressableOpacity>,
    );

    expect(getByText("Press me")).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <PressableOpacity onPress={onPressMock}>
        <Text>Press me</Text>
      </PressableOpacity>,
    );

    fireEvent.press(getByText("Press me"));
    expect(onPressMock).toHaveBeenCalled();
  });

  it("changes opacity when pressed", () => {
    const { getByTestId } = render(
      <PressableOpacity onPress={() => {}} testID="pressable" testOnly_pressed>
        <Text>Press me</Text>
      </PressableOpacity>,
    );

    const pressable = getByTestId("pressable");
    fireEvent.press(pressable);
    expect(pressable?.props?.style).toMatchObject({ opacity: 0.5 });
  });
});
