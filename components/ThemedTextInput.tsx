import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
  StyleSheet,
} from "react-native";
import { useMemo } from "react";

import { ThemedText } from "../fragments/ThemedText";
import Spacing from "../constants/Spacing";
import {
  CreateStylesColors,
  useThemeAwareStyles,
} from "../hooks/useThemeAwareStyles";
import Spacer from "../fragments/Spacer";
import { useThemeColor } from "../hooks/useThemeColor";

interface TextInputProps extends RNTextInputProps {
  label: string;
}

const ThemedTextInput: React.FC<TextInputProps> = ({
  label,
  style,
  ...props
}) => {
  const styles = useThemeAwareStyles(createStyles);
  const placeholderTextColor = useThemeColor({}, "textInputPlaceholder");
  const flattenedStyles = useMemo(
    () => StyleSheet.flatten([styles.container, style]),
    [style, styles],
  );
  return (
    <View>
      <ThemedText type="caption">{label}</ThemedText>
      <Spacer size={Spacing.xS} />
      <RNTextInput
        style={flattenedStyles}
        cursorColor={styles.container.color}
        placeholderTextColor={placeholderTextColor}
        {...props}
      />
    </View>
  );
};

export default ThemedTextInput;

const createStyles = (colors: CreateStylesColors) =>
  StyleSheet.create({
    container: {
      paddingVertical: Spacing.xM,
      paddingHorizontal: Spacing.s,
      borderWidth: 2,
      borderRadius: 8,
      backgroundColor: colors.textInputBackground,
      color: colors.text,
    },
  });
