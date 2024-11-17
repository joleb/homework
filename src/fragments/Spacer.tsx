import { View, ViewProps, StyleSheet } from "react-native";
import { useMemo } from "react";

import Spacing from "@/src/constants/Spacing";

interface SpacerProps extends ViewProps {
  size?: (typeof Spacing)[keyof typeof Spacing];
}

const Spacer: React.FC<SpacerProps> = ({
  size = Spacing.xM,
  style,
  ...props
}) => {
  const flattenedStyles = useMemo(
    () => StyleSheet.flatten([{ height: size }, style]),
    [style, size],
  );
  return <View style={flattenedStyles} {...props} />;
};

export default Spacer;
