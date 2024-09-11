import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as string)) notFound();

  return {
    messages: (await import(`@/registry/registry-messages/${locale}.json`))
      .default,
  };
});
