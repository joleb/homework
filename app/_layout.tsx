import React, { useEffect } from "react";

import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useTranslation } from "react-i18next";
import { useFonts } from "expo-font";

import apolloClient from "@/src/utils/apolloClient";
import {
  darkNavigationTheme,
  lightNavigationTheme,
} from "@/src/constants/NavigationTheme";
import { AuthProvider, useAuth } from "@/src/components/provider/AuthProvider";

import "@/src/utils/i18n";
import "react-native-reanimated";

import useColorScheme from "@/src/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider
        value={
          colorScheme === "dark" ? darkNavigationTheme : lightNavigationTheme
        }
      >
        <GestureHandlerRootView>
          <BottomSheetModalProvider>
            <AuthProvider>
              <AppNavigator />
            </AuthProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </ApolloProvider>
  );
};

const AppNavigator = () => {
  const { t } = useTranslation(["routes"]);
  const { isLoggedIn } = useAuth();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: t("index"), headerBackVisible: false }}
      />
      {isLoggedIn && (
        <Stack.Screen
          name="dashboard"
          options={{
            title: t("dashboard"),
            headerBackVisible: false,
            gestureEnabled: false,
          }}
        />
      )}
    </Stack>
  );
};

export default RootLayout;
