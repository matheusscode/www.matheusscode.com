import { DefaultNavigationContent } from "@/packages/components/default-navigation-content";
import { LanguageSwitcher } from "@/packages/components/language-switcher";
import { NavBar } from "@/packages/components/nav-bar";
import { ProfileLinkCard } from "@/packages/components/profile-link-card";
import { SideBar } from "@/packages/components/side-bar";
import { constructMetadata } from "@/packages/utils/construct-metadata";
import Transmutation from "@/ui/layout/transmutation-content";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata = constructMetadata();

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  unstable_setRequestLocale(locale);

  return (
    <div className="h-screen w-full overflow-hidden laptop:flex">
      <SideBar className="sticky top-0 flex-none">
        <Transmutation
          initial={{
            opacity: 0,
            y: 24,
          }}
        >
          <ProfileLinkCard href="/" />
          <DefaultNavigationContent />
        </Transmutation>
      </SideBar>
      <div className="h-full w-full overflow-y-scroll">
        <NavBar />
        <LanguageSwitcher className="fixed right-4 top-4 z-10 hidden laptop:block" />
        {children}
      </div>
    </div>
  );
}
