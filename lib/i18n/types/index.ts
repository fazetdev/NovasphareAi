export type LanguageCode = "en" | "ar";

export type Direction = "ltr" | "rtl";

export type GulfRegion =
  | "SA"
  | "AE"
  | "QA"
  | "KW"
  | "BH"
  | "OM";

export interface LocaleConfig {
  code: LanguageCode;
  name: string;
  nativeName: string;
  direction: Direction;
  region: GulfRegion;
  currency: string;
  timeZone: string;
  numberingSystem: string;
  calendar: string;
  weekStartsOn: number;
  weekend: readonly number[];
}

export type TranslationValue = string;
export type TranslationNamespace = Record<string, TranslationValue>;

export type TranslationResources = Record<
  LanguageCode,
  Record<string, TranslationNamespace>
>;

export interface LocalizationContextValue {
  locale: LocaleConfig;
  language: LanguageCode;
  direction: Direction;
  setLanguage: (language: LanguageCode) => void;
}
