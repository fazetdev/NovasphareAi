import { LOCALES } from "../config";
import type { LanguageCode } from "../types";

export function getLocale(language: LanguageCode) {
  return LOCALES[language];
}

export function getDirection(language: LanguageCode) {
  return LOCALES[language].direction;
}

export function isRTL(language: LanguageCode) {
  return LOCALES[language].direction === "rtl";
}
