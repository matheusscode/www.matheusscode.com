"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";
import { NewsletterCard } from "./newsletter-card";

interface SideBarProps extends HTMLAttributes<HTMLDivElement> {
  isInner?: boolean;
  title?: string;
}

export const SideBar = ({
  children,
  className,
  isInner = false,
  ...props
}: SideBarProps) => {
  const pathname = usePathname();

  return (
    <ScrollArea
      className={cn(
        "sticky w-[335px] top-0 z-10 px-2.5 py-3 h-screen max-laptop:hidden flex flex-col bg-zinc-50 border-r border-gray-200 dark:border-gray-700/20 dark:bg-zinc-900/20",
        isInner && "w-72",
        pathname.endsWith("curriculum") && "hidden",
      )}
    >
      <aside {...props} className={cn("h-full", className)}>
        <div className="w-full min-h-full text-sm">
          {children}
          <div className="flex items-center space-y-4 justify-center flex-col">
            <NewsletterCard className="mt-6" />
            <span className="mt-2 text-center text-muted-foreground">
              Made with love ❤️
            </span>
          </div>
        </div>
      </aside>
    </ScrollArea>
  );
};
