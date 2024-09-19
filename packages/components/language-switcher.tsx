"use client";

import { registry_locales } from "@/registry/registry-locales";
import { usePathname, useRouter } from "next/navigation";
import { ButtonHTMLAttributes, useState } from "react";
import { cn } from "../utils/cn";
import { Button, ButtonProps } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface LanguageSwitcherProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps {}

export function LanguageSwitcher({
  className,
  variant = "ghost",
  children,
  size = "icon",
  ...props
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState(
    registry_locales.includes(pathname.split("/")[1])
      ? pathname.split("/")[1]
      : "en",
  );

  const onTranslate = () => {
    const newLocale = currentLocale === "en" ? "pt" : "en";
    const segments = pathname.split("/");

    if (registry_locales.includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    const newPath = segments.join("/");

    if (newPath !== pathname) {
      setCurrentLocale(newLocale);
      router.push(newPath);
      console.log("Navigating to:", newPath);
    }
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          {...props}
          aria-label="language-translate-switcher"
          variant={variant}
          size={size}
          className={cn("text-lg", className)}
          onClick={onTranslate}
        >
          {children || (currentLocale === "en" ? "🇧🇷" : "🇺🇸")}
        </Button>
      </TooltipTrigger>
      <TooltipContent align="center" side="bottom">
        {currentLocale === "en" ? "Mudar para português" : "Change to english"}
      </TooltipContent>
    </Tooltip>
  );
}
