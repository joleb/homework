import React, { useCallback, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";

import { router } from "expo-router";
import { useTranslation } from "react-i18next";

import { useHandleLogin } from "../hooks/useHandleLogin";
import Spacing from "../constants/Spacing";
import { ThemedText } from "../fragments/ThemedText";
import ThemedTextInput from "../components/ThemedTextInput";
import {
  CreateStylesColors,
  useThemeAwareStyles,
} from "../hooks/useThemeAwareStyles";
import Spacer from "../fragments/Spacer";
import ThemedButton from "../fragments/ThemedButton";
import { useAuth } from "../components/contexts/AuthContext";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState(process.env.EXPO_PUBLIC_EMAIL);
  const [password, setPassword] = useState(process.env.EXPO_PUBLIC_PASSWORD);
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
  }, [email, password, handleLogin, t, setIsLoggedIn, setUserName]);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <ThemedTextInput
          label={t("username")}
          placeholder={t("input:pleaseEnter", { field: t("username") })}
          value={email}
          onChangeText={setEmail}
          clearButtonMode="always"
        />
        <Spacer />
        <ThemedTextInput
          label={t("password")}
          placeholder={t("input:pleaseEnter", { field: t("password") })}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          clearButtonMode="always"
        />
        <Spacer />
        <ThemedButton onPress={login} disabled={loading} testID="login_button">
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
