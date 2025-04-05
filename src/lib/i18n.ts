import i18n from 'i18next';
import {initReactI18next} from "react-i18next";
import en from '@/config/locales/en.json'
import th from '@/config/locales/th.json'
import jp from '@/config/locales/jp.json'

i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
        resources: {
            en: en,
            th: th,
            jp: jp,
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
})

export default i18n;