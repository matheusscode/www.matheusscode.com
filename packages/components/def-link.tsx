import { Link } from "@/i18n/routing";
import { cn } from "@/utils/cn";
import { LucideIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { LinkProps } from "next/link";
import { HTMLAttributes } from "react";

interface DefLinkParams {
  label: string;
  path: string;
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
  disabled?: boolean;
  id?: number | string;
}

interface DefLinkProps
  extends Omit<LinkProps, "href">,
    HTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
  params: DefLinkParams;
  isCount?: boolean;
  disabled?: boolean;
}

export const DefLink = ({
  isActive,
  isCount = false,
  params,
  disabled,
  ...props
}: DefLinkProps) => {
  const locale = useLocale();
  const {
    iconLeft: IconLeft,
    iconRight: IconRight,
    label,
    path,
    id,
    disabled: paramDisable,
  } = params;

  const t = useTranslations("MainNav");

  return (
    <span
      data-disabled={paramDisable || disabled}
      className=" data-[disabled=true]:cursor-not-allowed"
    >
      <Link
        {...props}
        locale={locale}
        href={path}
        data-active={isActive}
        data-disabled={paramDisable || disabled}
        target={isCount ? "" : "_blank"}
        rel="noreferrer noopener"
        referrerPolicy="no-referrer"
        className="transition-all group text-gray-500 dark:text-gray-400 hover:text-zinc-800 dark:hover:text-zinc-200 flex items-center select-none justify-between rounded-lg p-1.5 h-9 px-2 data-[active=true]:bg-black data-[active=true]:dark:bg-zinc-900/85 data-[active=true]:text-white hover:bg-gray-200 hover:dark:bg-zinc-800/30 data-[disabled=true]:pointer-events-none data-[disabled=true]:bg-gray-200 data-[disabled=true]:dark:bg-zinc-950 data-[disabled=true]:text-gray-700 data-[disabled=true]:opacity-85"
      >
        <span className="flex items-center gap-2 w-full">
          {IconLeft && <IconLeft size={18} />}
          <span
            data-active={isActive}
            className={cn("font-medium text-md tracking-tight")}
          >
            {t(`NavLinks.${label.toLowerCase()}`)}
          </span>
        </span>
        {isCount && (
          <span
            data-active={isActive}
            className={cn(
              "hidden h-6 w-6 place-content-center rounded border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 text-xs font-medium text-gray-500 transition-colors duration-200 group-hover:border-gray-300 group-hover:dark:border-zinc-600 data-[active=true]:dark:border-zinc-500 lg:grid data-[active=true]:border-gray-600 data-[active=true]:bg-gray-700 data-[active=true]:text-gray-200 data-[active=true]:group-hover:border-gray-600",
            )}
          >
            {id}
          </span>
        )}
        {IconRight && <IconRight size={22} />}
      </Link>
    </span>
  );
};
