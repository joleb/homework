import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
  StyleSheet,
} from "react-native";
import { useMemo } from "react";

import { useTranslation } from "react-i18next";

import { ThemedText } from "@/src/fragments/ThemedText";
import Spacing from "@/src/constants/Spacing";
import {
  CreateStylesColors,
  useThemeAwareStyles,
} from "@/src/hooks/useThemeAwareStyles";
import Spacer from "@/src/fragments/Spacer";
import { useThemeColor } from "@/src/hooks/useThemeColor";

interface TextInputProps extends RNTextInputProps {
  label: string;
  error?: string;
}

const ThemedTextInput: React.FC<TextInputProps> = ({
  label,
  style,
  error,
  ...props
}) => {
  const styles = useThemeAwareStyles(createStyles);
  const { t } = useTranslation("errorMessages");
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
      {error && (
        <>
          <Spacer size={Spacing.xS} />
          <ThemedText type="captionRegular" variant="warning">
            {t(error)}
          </ThemedText>
        </>
      )}
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
