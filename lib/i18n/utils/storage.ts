import { DEFAULT_LANGUAGE } from "../config";
import type { LanguageCode } from "../types";

const STORAGE_KEY = "novacore.locale";

export function getStoredLanguage(): LanguageCode {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  return (localStorage.getItem(STORAGE_KEY) as LanguageCode) ?? DEFAULT_LANGUAGE;
}

export function setStoredLanguage(language: LanguageCode) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(STORAGE_KEY, language);
}
