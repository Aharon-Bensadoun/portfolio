import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import fr from './locales/fr.json'
import he from './locales/he.json'

export const SUPPORTED_LANGUAGES = ['en', 'fr', 'he'] as const
export type Lang = (typeof SUPPORTED_LANGUAGES)[number]

export const RTL_LANGUAGES: Lang[] = ['he']

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      he: { translation: he },
    },
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGUAGES as unknown as string[],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

const applyDirection = (lng: string) => {
  const isRtl = RTL_LANGUAGES.includes(lng as Lang)
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
  document.documentElement.lang = lng
}

applyDirection(i18n.resolvedLanguage ?? 'en')
i18n.on('languageChanged', applyDirection)

export default i18n
