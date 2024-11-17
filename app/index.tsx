import React, { useCallback, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";

import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { z } from "zod";

import { loginFormSchema } from "@/src/formSchemas/login";
import { setFormValue, validateForm } from "@/src/utils/form";
import useIsLoggedIn from "@/src/hooks/useIsLoggedIn";
import { useHandleLogin } from "@/src/hooks/useHandleLogin";
import Spacing from "@/src/constants/Spacing";
import { ThemedText } from "@/src/fragments/ThemedText";
import ThemedTextInput from "@/src/components/ThemedTextInput";
import {
  CreateStylesColors,
  useThemeAwareStyles,
} from "@/src/hooks/useThemeAwareStyles";
import Spacer from "@/src/fragments/Spacer";
import ThemedButton from "@/src/fragments/ThemedButton";
import { useAuth } from "@/src/components/provider/AuthProvider";

const LoginScreen: React.FC = () => {
  // using env variables for development purposes and simple e2e testing
  const [loginValues, setLoginValues] = useState<
    z.infer<typeof loginFormSchema>
  >({
    email: {
      value: process.env.EXPO_PUBLIC_EMAIL || "",
      error: "",
    },
    password: {
      value: process.env.EXPO_PUBLIC_PASSWORD || "",
      error: "",
    },
  });
  useIsLoggedIn();
  const { setUserName, setIsLoggedIn } = useAuth();
  const { t } = useTranslation([
    "general",
    "actions",
    "input",
    "errorMessages",
  ]);
  const { handleLogin, loading, hasError } = useHandleLogin();

  const styles = useThemeAwareStyles(createStyles);

  const login = useCallback(async () => {
    const { success } = validateForm(
      loginFormSchema,
      loginValues,
      setLoginValues,
    );

    if (!success) {
      return;
    }
    const {
      email: { value: email },
      password: { value: password },
    } = loginValues;
    const result = await handleLogin({
      email,
      password,
    });

    if (!result) {
      Alert.alert(t("errorMessages:loginFailed"));
      return;
    }
    setIsLoggedIn(true);
    setUserName(result);
    router.push("/dashboard");
  }, [loginValues, handleLogin, t, setIsLoggedIn, setUserName]);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <ThemedTextInput
          label={t("username")}
          placeholder={t("input:pleaseEnter", { field: t("username") })}
          value={loginValues.email.value}
          onChangeText={setFormValue("email", setLoginValues)}
          clearButtonMode="always"
          error={loginValues.email.error}
        />
        <Spacer />
        <ThemedTextInput
          label={t("password")}
          placeholder={t("input:pleaseEnter", { field: t("password") })}
          value={loginValues.password.value}
          onChangeText={setFormValue("password", setLoginValues)}
          secureTextEntry
          clearButtonMode="always"
          error={loginValues.password.error}
        />
        <Spacer />
        <ThemedButton onPress={login} testID="login_button" isLoading={loading}>
          {t("actions:login")}
        </ThemedButton>
        {hasError && (
          <ThemedText variant="warning">
            {t("errorMessages:loginFailed")}
          </ThemedText>
        )}
      </View>
    </View>
  );
};

const createStyles = (colors: CreateStylesColors) =>
  StyleSheet.create({
    container: { flex: 1, justifyContent: "center", padding: Spacing.xL },
    form: {
      backgroundColor: colors.primaryBackground,
      padding: Spacing.m,
      borderRadius: 8,
      shadowColor: colors.cardShadow,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
  });

export default LoginScreen;
