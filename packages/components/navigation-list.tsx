"use client";

import { usePathname } from "@/i18n/routing";
import { DefLink } from "@/packages/components/def-link";
import transitions from "@/registry/registry-animations";
import { NavigateLink } from "@/registry/registry-navigation-routes";
import Transmutation from "@/ui/layout/transmutation-content";
import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";
import { Dot } from "./ui/dot";

interface NavigationListProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  hasCount?: boolean;
  links: NavigateLink[];
  animationTime?: number;
}

export const NavigationList = ({
  title,
  className,
  hasCount = false,
  links = [],
  animationTime = 0.2,
  ...props
}: NavigationListProps) => {
  const pathname = usePathname();

  return (
    <nav {...props} className={cn("flex flex-col gap-1", className)}>
      {title && (
        <Transmutation transition={transitions.slideToRight}>
          <h1 className="flex items-center gap-1.5 p-2 text-[0.82rem] font-semibold text-gray-500 dark:text-gray-400/75">
            <Dot />
            {title}
          </h1>
        </Transmutation>
      )}
      <ul className="flex flex-col gap-1">
        {links.map((link, index) => (
          <li key={link.id} className="block">
            <Transmutation
              transition={transitions.slideToRight}
              time={index * animationTime}
            >
              <DefLink
                isCount={hasCount}
                params={link}
                isActive={pathname.endsWith(link.path)}
                disabled={link.disabled}
              />
            </Transmutation>
          </li>
        ))}
      </ul>
    </nav>
  );
};
