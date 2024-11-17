import React from "react";
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleSheet,
  View,
} from "react-native";

const defaultHitSlop = { top: 8, right: 8, bottom: 8, left: 8 };

const PressableOpacity: React.FC<
  PressableProps & {
    children: React.ReactNode;
  }
> = ({ children, style, hitSlop = defaultHitSlop, ...props }) => {
  const customStyle: PressableProps["style"] = (
    state: PressableStateCallbackType,
  ) =>
    StyleSheet.compose(
      {
        opacity: state.pressed ? 0.5 : 1,
      },
      // use style  if provided and take into account the state
      style && typeof style === "function" ? style(state) : style,
    );
  return (
    <Pressable hitSlop={hitSlop} style={customStyle} {...props}>
      <View pointerEvents="box-none">{children}</View>
    </Pressable>
  );
};

export default PressableOpacity;
