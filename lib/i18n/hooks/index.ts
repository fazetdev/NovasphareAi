"use client";

import { useContext } from "react";

import { LocalizationContext } from "@/providers";
import { translations } from "../locales";

export function useLocale() {
  const context = useContext(LocalizationContext);

  if (!context) {
    throw new Error(
      "useLocale must be used within LocalizationProvider.",
    );
  }

  return context;
}

export function useDirection() {
  return useLocale().direction;
}

export function useTranslations() {
  const { language } = useLocale();

  return translations[language];
}

export function useFormatter() {
  return useLocale().locale;
}
