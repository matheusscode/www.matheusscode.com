"use client";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Link } from "@/i18n/routing";
import transitions from "@/registry/registry-animations";
import {
  NavigateLink,
  registry_nav_links,
  registry_social_links,
} from "@/registry/registry-navigation-routes";
import Transmutation from "@/ui/layout/transmutation-content";
import { SearchIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { ThemeSwitcher } from "./theme-switcher";

interface QuickExplorerProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const QuickExplorer = ({ className, ...props }: QuickExplorerProps) => {
  const t = useTranslations("navigation");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const renderLinks = (link: NavigateLink) => {
    return (
      <CommandItem key={link.id} asChild>
        <Link href={link.path} className="flex cursor-pointer gap-2.5">
          <span>{link.iconLeft && <link.iconLeft size={18} />}</span>
          <span>{t(`${link.label.toLowerCase()}` as never)}</span>
        </Link>
      </CommandItem>
    );
  };

  return (
    <Transmutation transition={transitions.slideToRight}>
      <div
        className={cn(
          "max-laptop:hidden flex w-full items-center gap-2",
          className,
        )}
      >
        <Button
          {...props}
          aria-label="command-explorer"
          onClick={() => setOpen(true)}
          className={cn(
            "h-8 w-full justify-between bg-transparent px-2 font-normal text-foreground dark:text-muted-foreground/90",
            className,
          )}
          size="lg"
          variant="outline"
        >
          <div className="flex w-full items-center justify-between gap-2 text-sm">
            <div className="flex items-center gap-1.5">
              <SearchIcon size={17} />
              <span>Search...</span>
            </div>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </Button>
        <ThemeSwitcher className="h-8 min-w-8" />
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {registry_nav_links.map((link) => renderLinks(link))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Social">
            {registry_social_links.map((link) => renderLinks(link))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </Transmutation>
  );
};
