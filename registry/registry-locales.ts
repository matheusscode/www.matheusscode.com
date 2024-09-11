export type Locale = (typeof registry_locales)[number];

export const registry_locales: string[] = ["en", "pt"] as const;
export const registry_default_language = "en";
export const registry_locale_prefix = "always";

export const registry_language_name: Record<Locale, string> = {
  en: "English",
  pt: "Português",
};
