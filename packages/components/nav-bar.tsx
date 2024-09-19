"use client";

import { BottomSheet } from "@/components/bottom-sheet";
import { ProfileLinkCard } from "@/components/profile-link-card";
import { ThemeSwitcher } from "@/components/theme-switcher";
import transitions from "@/registry/registry-animations";
import Transmutation from "@/ui/layout/transmutation-content";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";
import { LanguageSwitcher } from "./language-switcher";

interface NavBarProps extends HTMLAttributes<HTMLDivElement> {}

export const NavBar = ({ className, ...props }: NavBarProps) => {
  const pathname = usePathname();

  return (
    <Transmutation
      transition={transitions.goDown}
      className={cn(
        "sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200 bg-zinc-50/40 px-4 py-0.5 backdrop-blur-md dark:border-gray-700/20 dark:bg-zinc-950/20 laptop:hidden",
        className,
        pathname.endsWith("curriculum") && "hidden",
      )}
    >
      <header {...props} className="flex w-full items-center justify-between">
        <ProfileLinkCard
          href="/"
          className="w-auto px-0 hover:bg-transparent dark:hover:bg-transparent"
        />
        <div className="flex items-center gap-2.5">
          <LanguageSwitcher />
          <ThemeSwitcher variant="ghost" />
          <BottomSheet variant="ghost" />
        </div>
      </header>
    </Transmutation>
  );
};
