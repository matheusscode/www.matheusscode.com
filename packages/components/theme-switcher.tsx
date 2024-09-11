"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "../utils/cn";
import { Button, ButtonProps } from "./ui/button";

interface ThemeSwitcherProps extends ButtonProps {}

export function ThemeSwitcher({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: ThemeSwitcherProps) {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      {...props}
      variant={variant}
      size={size}
      className={cn("bg-transparent text-muted-foreground/90", className)}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      <Moon className="hidden h-5 w-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
