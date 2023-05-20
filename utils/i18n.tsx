import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n.use(Backend).use(initReactI18next).init({
  lng: 'en', // Default language
  fallbackLng: 'en',
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
  },
});

export default i18n;
    