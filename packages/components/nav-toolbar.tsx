"use client";

import { Button } from "@/components//ui/button";
import { cn } from "@/utils/cn";
import { RadioIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

interface NavToolbarProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export const NavToolbar = ({ title, className, ...props }: NavToolbarProps) => {
  const pathname = usePathname();
  const isWritingPath = pathname.startsWith("/writing");
  const isBookmarksPath = pathname.startsWith("/bookmarks");

  return (
    <header
      {...props}
      className={cn(
        "sticky top-0 z-10 border-b bg-zinc-50 px-5 py-3",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold tracking-tight">{title}</span>
        <div className="flex items-center gap-2">
          {(isWritingPath || isBookmarksPath) && (
            <Button variant="outline" asChild>
              <a
                href={isWritingPath ? "/writing.xml" : "/bookmarks.xml"}
                title="RSS feed"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RadioIcon size={16} className="mr-2" />
                RSS feed
              </a>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
