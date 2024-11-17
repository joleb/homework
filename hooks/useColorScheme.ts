import { useColorScheme as useRnColorScheme } from "react-native";

import { isKeyOfObject } from "../utils/general";
import { SupportedThemes } from "../constants/Colors";

const useColorScheme = () => {
  const theme = useRnColorScheme();
  if (isKeyOfObject(SupportedThemes, theme)) {
    return SupportedThemes[theme];
  }
  // always return a valid theme
  return "light";
};

export default useColorScheme;
