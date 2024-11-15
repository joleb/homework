import React from "react";

import { render } from "@testing-library/react-native";

import Tag from "../Tag";

import { Colors } from "@/constants/Colors";

describe("Tag Component", () => {
  it("should match snapshot", () => {
    const { toJSON } = render(<Tag label="Test Label" />);
    expect(toJSON).toMatchSnapshot();
  });
  it("renders correctly with default variant", () => {
    const { getByText } = render(<Tag label="Test Label" />);
    const textElement = getByText("Test Label");
    expect(textElement).toBeTruthy();
    expect(textElement.props.style).toMatchObject({
      borderColor: Colors.light.tagBorder,
    });
  });

  it("renders correctly with warning variant", () => {
    const { getByText } = render(
      <Tag label="Warning Label" variant="warning" />,
    );
    const textElement = getByText("Warning Label");
    expect(textElement).toBeTruthy();
    expect(textElement.props.style).toMatchObject({
      borderColor: Colors.light.warningBorder,
    });
  });

  it("applies custom styles", () => {
    const customStyle = { backgroundColor: "red" };
    const { getByText } = render(
      <Tag label="Custom Style" style={customStyle} />,
    );
    const textElement = getByText("Custom Style");
    expect(textElement).toBeTruthy();
    expect(textElement.props.style).toMatchObject(customStyle);
  });
});
