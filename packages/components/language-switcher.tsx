"use client";

import {
  registry_language_name,
  registry_locales,
} from "@/registry/registry-locales";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const switchLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    const segments = pathname.split("/");

    if (registry_locales.includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    const newPath = segments.join("/");

    if (newPath !== pathname) {
      router.push(newPath);
      console.log("Navigating to:", newPath);
    }
  };

  return (
    <select value={locale} onChange={switchLanguage}>
      {registry_locales.map((lang) => (
        <option key={lang} value={lang}>
          {registry_language_name[lang]}
        </option>
      ))}
    </select>
  );
}
