import type { LanguageCode } from "../types";

export function formatDate(
  value: Date | string | number,
  locale: LanguageCode,
  options?: Intl.DateTimeFormatOptions,
) {
  return new Intl.DateTimeFormat(locale, options).format(new Date(value));
}

export function formatNumber(
  value: number,
  locale: LanguageCode,
  options?: Intl.NumberFormatOptions,
) {
  return new Intl.NumberFormat(locale, options).format(value);
}

export function formatCurrency(
  value: number,
  locale: LanguageCode,
  currency: string,
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);
}

export function formatRelativeTime(
  value: number,
  unit: Intl.RelativeTimeFormatUnit,
  locale: LanguageCode,
) {
  return new Intl.RelativeTimeFormat(locale, {
    numeric: "auto",
  }).format(value, unit);
}
