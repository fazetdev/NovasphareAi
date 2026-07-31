import { DEFAULT_LANGUAGE, LOCALES, SUPPORTED_LANGUAGES } from "../config";
import type { LanguageCode } from "../types";

export function isSupportedLanguage(
  language: string,
): language is LanguageCode {
  return (SUPPORTED_LANGUAGES as readonly string[]).includes(language);
}

export function resolveLanguage(
  language?: string | null,
): LanguageCode {
  if (language && isSupportedLanguage(language)) {
    return language;
  }

  return DEFAULT_LANGUAGE;
}

export function getLocaleConfig(language: LanguageCode) {
  return LOCALES[language];
}
