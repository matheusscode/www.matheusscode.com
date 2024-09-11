"use client";

import { NavControls } from "@/packages/components/nav-controls";
import { NavList } from "@/packages/components/nav-list";
import {
  registry_nav_links,
  registry_social_links,
} from "@/registry/registry-navigation-routes";

export const MainNavContent = () => {
  return (
    <div className="flex flex-col mt-4 h-full">
      <NavControls />
      <div className="flex w-full mt-3.5 justify flex-col gap-4 text-sm">
        <NavList links={registry_nav_links} hasCount />
        <hr />
        <NavList title="Online" links={registry_social_links} />
        <hr />
      </div>
    </div>
  );
};
