import React from "react";

import { render } from "@testing-library/react-native";

import Spacer from "../Spacer";
import Spacing from "../../constants/Spacing";

describe("Spacer", () => {
  it("matches snapshot", () => {
    const { toJSON } = render(<Spacer />);
    expect(toJSON()).toMatchSnapshot();
  });
  it("renders with default size", () => {
    const { getByTestId } = render(<Spacer testID="spacer" />);
    const spacer = getByTestId("spacer");
    expect(spacer.props.style).toMatchObject({ height: Spacing.xM });
  });

  it("renders with custom size", () => {
    const customSize = Spacing.l;
    const { getByTestId } = render(
      <Spacer size={customSize} testID="spacer" />,
    );
    const spacer = getByTestId("spacer");
    expect(spacer.props.style.height).toBe(customSize);
  });
});
