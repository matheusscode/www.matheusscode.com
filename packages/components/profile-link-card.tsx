import { Link } from "@/i18n/routing";
import transitions from "@/registry/registry-animations";
import { registry_myself } from "@/registry/registry-myself";
import Transmutation from "@/ui/layout/transmutation-content";
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
    <Transmutation className={cn(className)} transition={transitions.reveal}>
      <Link
        {...props}
        locale={locale}
        href={href}
        target="_self"
        rel="noreferrer noopener"
        referrerPolicy="no-referrer"
        prefetch={false}
        className={cn(
          "max-laptop:hover:bg-transparent max-laptop:dark:hover:bg-transparent inline-flex w-full items-center gap-2 whitespace-nowrap rounded-md px-2.5 py-2 transition-all hover:bg-gray-200 dark:hover:bg-zinc-900/40",
          className,
        )}
      >
        <Image
          src={registry_myself.avatar_url}
          alt={registry_myself.alt_username}
          priority
          quality={100}
          width={44}
          height={44}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h1 className="text-sm font-semibold tracking-tight">
            {registry_myself.full_name}
          </h1>
          <span className="text-left text-xs text-gray-600 dark:text-gray-400">
            {registry_myself.role}
          </span>
        </div>
      </Link>
    </Transmutation>
  );
};
