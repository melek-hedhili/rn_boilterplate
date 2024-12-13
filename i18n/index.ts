import i18n, { LanguageDetectorAsyncModule } from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import * as SecureStore from "expo-secure-store";

import translationEn from "./en-US/translation.json";
import translationFr from "./fr-FR/translation.json";
import translationAr from "./ar-AR/translation.json";
import { I18nManager } from "react-native";

const resources = {
  "fr-FR": { translation: translationFr },
  "en-US": { translation: translationEn },
  "ar-AR": { translation: translationAr },
};
const languageDetector: LanguageDetectorAsyncModule = {
  type: "languageDetector",
  init: () => {}, // Required by i18next, but can be a no-op
  async: true, // To flag the detection as asynchronous
  detect: async (): Promise<string | undefined> => {
    const userLang = await SecureStore.getItemAsync("language");
    console.log("userLang", userLang);
    const deviceLang = userLang || Localization.locale;
    console.log("deviceLang", deviceLang);
    return deviceLang;
  },
  cacheUserLanguage: () => {},
};
const initI18n = async () => {
  let savedLanguage = await SecureStore.getItemAsync("language");
  console.log("savedLanguage", savedLanguage);
  if (!savedLanguage) {
    savedLanguage = Localization.locale;
  }

  i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      compatibilityJSON: "v3",
      resources,
      lng: savedLanguage,
      fallbackLng: "en-US",
      interpolation: {
        escapeValue: false,
      },
    });
};

initI18n();
type LanguageType = keyof typeof resources;
const changeLanguage = async (language: LanguageType) => {
  if (i18n.language === language) {
    return;
  }

  console.log("Changing language to:", language);

  await SecureStore.setItemAsync("language", language);
  i18n.changeLanguage(language);

  const isRTL = language === "ar-AR";
  I18nManager.forceRTL(isRTL);
};

export { i18n, changeLanguage, LanguageType };
