"use client";

import { usePathname } from "@/i18n/routing";
import { DefLink } from "@/packages/components/def-link";
import { NavigateLink } from "@/registry/registry-navigation-routes";
import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";
import { Dot } from "./ui/dot";

interface NavigationListProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  hasCount?: boolean;
  links: NavigateLink[];
}

export const NavigationList = ({
  title,
  className,
  hasCount = false,
  links = [],
  ...props
}: NavigationListProps) => {
  const pathname = usePathname();

  return (
    <nav {...props} className={cn("flex flex-col gap-1", className)}>
      {title && (
        <h1 className="flex items-center gap-1.5 text-[0.82rem] font-semibold p-2 text-gray-500">
          <Dot />
          {title}
        </h1>
      )}
      <ul className="flex flex-col gap-1">
        {links.map((link) => (
          <li key={link.id} className="block">
            <DefLink
              isCount={hasCount}
              params={link}
              isActive={pathname.endsWith(link.path)}
              disabled={link.disabled}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
