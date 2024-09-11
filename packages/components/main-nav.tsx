import { ScrollArea } from "@/components/ui/scroll-area";
import { NavToolbar } from "@/packages/components/nav-toolbar";
import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";
import { NewsletterCard } from "./newsletter-card";

interface MainNavProps extends HTMLAttributes<HTMLDivElement> {
  isInner?: boolean;
  title?: string;
}

export const MainNav = ({
  children,
  className,
  title,
  isInner = false,
  ...props
}: MainNavProps) => {
  return (
    <ScrollArea
      className={cn(
        "sticky top-0 z-10 px-2.5 py-3 h-screen hidden lg:flex lg:flex-col bg-zinc-50 border-r border-gray-200 dark:border-gray-700/20 dark:bg-zinc-900/20",
        isInner ? "lg:min-w-72 xl:min-w-72" : "lg:min-w-56 xl:min-w-60",
      )}
    >
      <aside {...props} className={cn("h-full", className)}>
        {title && <NavToolbar title={title} />}
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
