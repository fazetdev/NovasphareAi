"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  getStoredLanguage,
  setStoredLanguage,
  resolveLanguage,
} from "@/lib/i18n/utils";
import { getLocaleConfig } from "@/lib/i18n/utils/language";
import type {
  LanguageCode,
  LocalizationContextValue,
} from "@/lib/i18n/types";

export const LocalizationContext =
  createContext<LocalizationContextValue | null>(null);

interface LocalizationProviderProps {
  children: ReactNode;
}

export function LocalizationProvider({
  children,
}: LocalizationProviderProps) {
  const [language, setLanguageState] =
    useState<LanguageCode>(resolveLanguage());

  const setLanguage = useCallback((language: LanguageCode) => {
    const resolved = resolveLanguage(language);

    setLanguageState(resolved);
    setStoredLanguage(resolved);
  }, []);

  useEffect(() => {
    setLanguageState(resolveLanguage(getStoredLanguage()));
  }, []);

  const locale = getLocaleConfig(language);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = locale.direction;
  }, [language, locale.direction]);

  const value = useMemo(
    () => ({
      locale,
      language,
      direction: locale.direction,
      setLanguage,
    }),
    [language, locale, setLanguage],
  );

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
}
