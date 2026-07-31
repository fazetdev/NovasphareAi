import type { LanguageCode, LocaleConfig } from "../types";

export const DEFAULT_LANGUAGE: LanguageCode = "en";

export const SUPPORTED_LANGUAGES: readonly LanguageCode[] = [
  "en",
  "ar",
] as const;

export const LOCALES: Record<LanguageCode, LocaleConfig> = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    direction: "ltr",
    region: "SA",
    currency: "SAR",
    timeZone: "Asia/Riyadh",
    numberingSystem: "latn",
    calendar: "gregory",
    weekStartsOn: 0,
    weekend: [5, 6],
  },
  ar: {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    direction: "rtl",
    region: "SA",
    currency: "SAR",
    timeZone: "Asia/Riyadh",
    numberingSystem: "arab",
    calendar: "gregory",
    weekStartsOn: 0,
    weekend: [5, 6],
  },
};

export const DEFAULT_LOCALE = LOCALES[DEFAULT_LANGUAGE];
