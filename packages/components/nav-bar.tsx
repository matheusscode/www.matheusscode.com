"use client";

import { BottomSheet } from "@/components/bottom-sheet";
import { ProfileLinkCard } from "@/components/profile-link-card";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Transmutation from "@/ui/layout/transmutation-content";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

interface NavBarProps extends HTMLAttributes<HTMLDivElement> {}

export const NavBar = ({ className, ...props }: NavBarProps) => {
  const pathname = usePathname();

  return (
    <Transmutation
      initial={{
        opacity: 0,
        y: 6,
      }}
    >
      <header
        {...props}
        className={cn(
          "sticky top-0 z-50 hidden h-16 w-full items-center justify-between border-b border-gray-200 bg-zinc-50 px-4 py-2.5 backdrop-blur-sm dark:border-gray-700/20 dark:bg-zinc-900/20 max-laptop:flex",
          className,
          pathname.endsWith("curriculum") && "hidden",
        )}
      >
        <ProfileLinkCard href="/" className="w-auto px-0" />
        <div className="flex items-center gap-2.5">
          <ThemeSwitcher variant="ghost" />
          <BottomSheet variant="ghost" />
        </div>
      </header>
    </Transmutation>
  );
};
