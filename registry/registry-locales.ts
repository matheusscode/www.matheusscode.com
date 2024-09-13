export type Locale = (typeof registry_locales)[number];

export const registry_locales: string[] = ["en", "pt"] as const;
export const registry_default_language: string = "en";
export const registry_locale_prefix: string = "always";
export const registry_routes: string[] = [
  "workspace",
  "journey",
  "stack",
  "projects",
  "curriculum",
];

export const registry_language_name: Record<Locale, string> = {
  en: "English",
  pt: "Português",
};
