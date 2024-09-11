import { Avatar, AvatarImage } from "@/components//ui/avatar";
import { registry_myself } from "@/registry/registry-myself";
import { cn } from "@/utils/cn";
import Link, { LinkProps } from "next/link";
import { HTMLAttributes } from "react";

interface ProfileLinkCardProps
  extends LinkProps,
    HTMLAttributes<HTMLAnchorElement> {}

export const ProfileLinkCard = ({
  className,
  href,
  ...props
}: ProfileLinkCardProps) => {
  return (
    <Link
      {...props}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      referrerPolicy="no-referrer"
      prefetch={false}
      className={cn(
        "transition-all whitespace-nowrap inline-flex w-full items-center gap-2 px-2.5 py-2 hover:bg-gray-200 dark:hover:bg-zinc-900/40 rounded-md",
        className,
      )}
    >
      <Avatar>
        <AvatarImage src={registry_myself.avatar} alt="devmatolo" />
      </Avatar>
      <div className="flex flex-col ">
        <h1 className="font-semibold tracking-tight text-sm">
          {registry_myself.name}
        </h1>
        <span className="text-gray-600 text-sm">{registry_myself.office}</span>
      </div>
    </Link>
  );
};
