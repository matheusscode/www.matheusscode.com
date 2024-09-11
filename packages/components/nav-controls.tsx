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
import {
  NavigateLink,
  registry_nav_links,
  registry_social_links,
} from "@/registry/registry-navigation-routes";
import { SearchIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./theme-switcher";

export function NavControls() {
  const t = useTranslations("MainNav");
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
        <Link href={link.path} className="flex gap-2.5 cursor-pointer">
          <span>{link.iconLeft && <link.iconLeft size={18} />}</span>
          <span>{t(`NavLinks.${link.label.toLowerCase()}`)}</span>
        </Link>
      </CommandItem>
    );
  };

  return (
    <>
      <div className="flex w-full items-center gap-2">
        <Button
          onClick={() => setOpen(true)}
          className="justify-between font-normal bg-transparent px-2 h-8 w-full text-muted-foreground/90"
          size="lg"
          variant="outline"
        >
          <div className="text-sm flex w-full justify-between gap-2 items-center">
            <div className="flex items-center gap-1.5">
              <SearchIcon size={17} />
              <span>Search...</span>
            </div>
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </Button>
        <ThemeSwitcher />
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
    </>
  );
}
