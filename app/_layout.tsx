import { useEffect } from "react";

import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { ApolloProvider } from "@apollo/client";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useTranslation } from "react-i18next";

import apolloClient from "@/src/utils/apolloClient";
import useColorScheme from "@/src/hooks/useColorScheme";
import {
  darkNavigationTheme,
  lightNavigationTheme,
} from "@/src/constants/NavigationTheme";
import { AuthProvider } from "@/src/components/contexts/AuthContext";

import "@/src/utils/i18n";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const { t } = useTranslation(["routes", "actions"]);

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
              <Stack>
                <Stack.Screen
                  name="index"
                  options={{ title: t("index"), headerBackVisible: false }}
                />
                <Stack.Screen
                  name="dashboard"
                  options={{
                    title: t("dashboard"),
                    headerBackVisible: false,
                    gestureEnabled: false,
                  }}
                />
              </Stack>
            </AuthProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default RootLayout;
