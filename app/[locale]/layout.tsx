import { constructMetadata } from "@/packages/utils/construct-metadata";
import { geistSans } from "@/styles/fonts";
import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import Providers from "../providers";

export const metadata = constructMetadata();

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: Readonly<ReactNode>;
  params: {
    locale: Readonly<string>;
  };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn("h-screen w-full", geistSans.className)}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
