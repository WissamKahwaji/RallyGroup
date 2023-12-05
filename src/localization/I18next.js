import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en.json";
import ar from "./ar.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem("lang") || "en",
    fallbackLng: ["en", "ar"],
    debug: false,
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
