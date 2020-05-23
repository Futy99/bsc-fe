import i18next from 'i18next'
import translationsCs from 'locale/cs/translation.json'
import translationsEn from 'locale/en/translation.json'
import { initReactI18next } from 'react-i18next'

export const supportedLanguages = ['en', 'cs'];

i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: false,
  resources: {
    en: {
      translation: translationsEn,
    },
    cs: {
      translation: translationsCs,
    },
  },
});
export const t: typeof i18next.t = (...transParams) => i18next.t(transParams);

export default i18next;