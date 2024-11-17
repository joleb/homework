import { Alert } from "react-native";
import { useCallback, useState } from "react";

import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";

import PressableOpacity from "../fragments/PressableOpacity";
import useHandleLogout from "../hooks/useHandleLogout";
import { useThemeColor } from "../hooks/useThemeColor";

const LogoutHeaderButton: React.FC = () => {
  const { handleLogout } = useHandleLogout();
  const iconColor = useThemeColor({}, "text");
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { t } = useTranslation(["general", "errorMessages", "prompt"]);

  const logout = useCallback(async () => {
    Alert.alert(t("prompt:hint"), t("prompt:logout"), [
      {
        text: t("prompt:cancel"),
        style: "cancel",
        onPress: () => {
          setIsLoggingOut(false);
        },
      },
      {
        text: t("prompt:confirm"),
        onPress: async () => {
          setIsLoggingOut(true);
          await handleLogout()
            .then((success) => {
              if (!success) {
                Alert.alert(t("errorMessages:logoutFailed"));
                return;
              }
              router.push("/");
            })
            .catch((err) => {
              Alert.alert(t("errorMessages:logoutFailed"));
              console.error("Logout error:", err);
            })
            .finally(() => {
              setIsLoggingOut(false);
            });
        },
      },
    ]);
  }, [handleLogout, router, t]);

  const renderIcon = useCallback(() => {
    if (isLoggingOut) {
      return <Feather name="loader" size={18} color={iconColor} />;
    }
    return <Feather name="log-out" size={18} color={iconColor} />;
  }, [isLoggingOut, iconColor]);

  return (
    <PressableOpacity onPress={logout} disabled={isLoggingOut}>
      {renderIcon()}
    </PressableOpacity>
  );
};

export default LogoutHeaderButton;
