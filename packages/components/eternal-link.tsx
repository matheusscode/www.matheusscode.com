import { cn } from "@/utils/cn";
import { ExternalLinkIcon } from "lucide-react";
import Link, { type LinkProps } from "next/link";
import { HTMLAttributes } from "react";

interface ExternalLinkProps
  extends LinkProps,
    HTMLAttributes<HTMLAnchorElement> {
  icon?: boolean;
}

export const ExternalLink = ({
  className,
  href,
  children,
  icon = true,
  ...props
}: ExternalLinkProps) => {
  return (
    <Link
      {...props}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      referrerPolicy="no-referrer"
      className={cn(
        "inline-flex w-auto items-center gap-1 break-words text-blue-600 hover:underline dark:text-blue-500",
        className,
      )}
    >
      {children}
      {icon && <ExternalLinkIcon size={17} />}
    </Link>
  );
};
