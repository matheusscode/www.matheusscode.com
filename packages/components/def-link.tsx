import { Link } from "@/i18n/routing";
import { NavigateLink } from "@/registry/registry-navigation-routes";
import { cn } from "@/utils/cn";
import { useLocale, useTranslations } from "next-intl";
import { LinkProps } from "next/link";
import { HTMLAttributes } from "react";

interface DefLinkProps
  extends Omit<LinkProps, "href">,
    HTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
  params: NavigateLink;
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
    target,
  } = params;

  const t = useTranslations("navigation");

  return (
    <span
      data-disabled={paramDisable || disabled}
      className="data-[disabled=true]:cursor-not-allowed"
    >
      <Link
        {...props}
        locale={locale}
        href={path}
        data-active={isActive}
        data-disabled={paramDisable || disabled}
        prefetch={false}
        target={target}
        rel="noreferrer noopener"
        referrerPolicy="no-referrer"
        className="group flex h-9 select-none items-center justify-between rounded-lg p-1.5 px-2 text-gray-500 transition-all hover:bg-gray-200 hover:text-zinc-800 data-[disabled=true]:pointer-events-none data-[active=true]:bg-black data-[disabled=true]:bg-gray-200 data-[active=true]:text-white data-[disabled=true]:text-gray-700 data-[disabled=true]:opacity-85 dark:text-gray-400 hover:dark:bg-zinc-800/30 dark:hover:text-zinc-200 data-[active=true]:dark:bg-zinc-900/85 data-[disabled=true]:dark:bg-zinc-950"
      >
        <span className="flex w-full items-center gap-2">
          {IconLeft && <IconLeft size={18} />}
          <span
            data-active={isActive}
            className={cn("text-md font-medium tracking-tight")}
          >
            {t(`${label.toLowerCase()}` as never)}
          </span>
        </span>
        {isCount && (
          <span
            data-active={isActive}
            className={cn(
              "hidden h-6 w-6 place-content-center rounded border border-gray-200 bg-gray-100 text-xs font-medium text-gray-500 transition-colors duration-200 group-hover:border-gray-300 data-[active=true]:border-gray-600 data-[active=true]:bg-gray-700 data-[active=true]:text-gray-200 data-[active=true]:group-hover:border-gray-600 dark:border-gray-800 dark:bg-gray-900 group-hover:dark:border-zinc-600 data-[active=true]:dark:border-zinc-500 lg:grid",
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
