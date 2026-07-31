export function getDocumentDirection(): "ltr" | "rtl" {
  if (typeof document === "undefined") {
    return "ltr";
  }

  return (document.documentElement.dir as "ltr" | "rtl") || "ltr";
}

export function getDocumentLanguage() {
  if (typeof document === "undefined") {
    return "en";
  }

  return document.documentElement.lang || "en";
}
