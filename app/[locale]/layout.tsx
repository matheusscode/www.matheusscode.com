import { DefaultNavigationContent } from "@/packages/components/default-navigation-content";
import { NavBar } from "@/packages/components/nav-bar";
import { PageWrapper } from "@/packages/components/page-wrapper";
import { ProfileLinkCard } from "@/packages/components/profile-link-card";
import { SideBar } from "@/packages/components/side-bar";
import { ScrollArea } from "@/packages/components/ui/scroll-area";
import { cn } from "@/packages/utils/cn";
import { constructMetadata } from "@/packages/utils/construct-metadata";
import { geistSans } from "@/styles/fonts";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Providers from "../providers";

export const metadata = constructMetadata();

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: Readonly<string>;
  };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen max-tablet:block flex w-full",
          geistSans.className,
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <SideBar>
              <ProfileLinkCard href="/" />
              <DefaultNavigationContent />
            </SideBar>
            <ScrollArea className="w-full h-screen">
              <NavBar />
              <PageWrapper>{children}</PageWrapper>
            </ScrollArea>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
