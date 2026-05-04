import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import he from "./languages/he.json"
import en from "./languages/en.json"
import ar from "./languages/ar.json"

i18n.use(initReactI18next).init({
  resources: {
    he: {
      translation: he,
    },
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  },
  lng: "he",
  fallbackLng: "he",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n