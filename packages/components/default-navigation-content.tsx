"use client";

import { NavigationList } from "@/packages/components/navigation-list";
import {
  registry_nav_links,
  registry_social_links,
} from "@/registry/registry-navigation-routes";
import { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { QuickExplorer } from "./quick-explorer";

interface DefaultNavigationContentProps
  extends HTMLAttributes<HTMLDivElement> {}

export const DefaultNavigationContent = ({
  className,
  ...props
}: DefaultNavigationContentProps) => {
  return (
    <div {...props} className={cn("mt-4 flex h-full flex-col", className)}>
      <QuickExplorer />
      <div className="justify mt-3.5 flex w-full flex-col gap-4 text-sm">
        <NavigationList links={registry_nav_links} hasCount />
        <hr />
        <NavigationList title="Online" links={registry_social_links} />
        {/* <hr className="max-laptop:hidden" /> */}
      </div>
    </div>
  );
};
