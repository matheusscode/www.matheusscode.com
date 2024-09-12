import { DefaultNavigationContent } from "@/packages/components/default-navigation-content";
import { NavBar } from "@/packages/components/nav-bar";
import { ProfileLinkCard } from "@/packages/components/profile-link-card";
import { SideBar } from "@/packages/components/side-bar";
import { constructMetadata } from "@/packages/utils/construct-metadata";

export const metadata = constructMetadata();

export default async function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full overflow-hidden laptop:flex">
      <SideBar className="sticky top-0 flex-none">
        <ProfileLinkCard href="/" />
        <DefaultNavigationContent />
      </SideBar>
      <div className="h-full w-full overflow-y-scroll">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
