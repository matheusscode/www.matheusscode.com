import { BottomSheet } from "@/components/bottom-sheet";
import { ProfileLinkCard } from "@/components/profile-link-card";
import { ThemeSwitcher } from "@/components/theme-switcher";

export const NavBar = () => {
  return (
    <header className="sticky top-0 w-full px-4 py-2.5 h-16 bg-background hidden items-center justify-between max-laptop:flex bg-zinc-50 border-b border-gray-200 dark:border-gray-700/20 dark:bg-zinc-900/20">
      <ProfileLinkCard href="/" className="w-auto px-0" />
      <div className="flex items-center gap-2.5">
        <ThemeSwitcher variant="ghost" />
        <BottomSheet variant="ghost" />
      </div>
    </header>
  );
};
