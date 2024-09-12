import { Link } from "@/i18n/routing";
import { registry_myself } from "@/registry/registry-myself";
import { cn } from "@/utils/cn";
import { useLocale } from "next-intl";
import Image from "next/image";
import { LinkProps } from "next/link";
import { HTMLAttributes } from "react";

interface ProfileLinkCardProps
  extends LinkProps,
    HTMLAttributes<HTMLAnchorElement> {}

export const ProfileLinkCard = ({
  className,
  href,
  ...props
}: ProfileLinkCardProps) => {
  const locale = useLocale();

  return (
    <Link
      {...props}
      locale={locale}
      href={href}
      target="_self"
      rel="noreferrer noopener"
      referrerPolicy="no-referrer"
      prefetch={false}
      className={cn(
        "transition-all whitespace-nowrap inline-flex w-full items-center gap-2 px-2.5 py-2 max-laptop:hover:bg-transparent max-laptop:dark:hover:bg-transparent hover:bg-gray-200 dark:hover:bg-zinc-900/40 rounded-md",
        className,
      )}
    >
      <Image
        src={registry_myself.avatar}
        alt="devmatolo"
        priority
        quality={100}
        width={44}
        height={44}
        className="rounded-full"
      />
      <div className="flex flex-col ">
        <h1 className="font-semibold tracking-tight text-sm">
          {registry_myself.name}
        </h1>
        <span className="text-gray-600 dark:text-gray-400 text-left text-xs">
          {registry_myself.office}
        </span>
      </div>
    </Link>
  );
};
