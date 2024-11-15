import { getLocales } from "expo-localization";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translations from "./translations";

const i18n = i18next.createInstance();
i18n.use(initReactI18next);
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

if (!i18n.isInitialized) {
  i18n.init({
    compatibilityJSON: "v3",
    resources: translations,
    lng: getLocales()[0].languageCode ?? "en",
    fallbackLng: "en",
    defaultNS: "general",
    debug: __DEV__,
  });
}

export default i18n;
