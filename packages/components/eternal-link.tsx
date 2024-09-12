import { cn } from "@/utils/cn";
import Link, { type LinkProps } from "next/link";
import { HTMLAttributes } from "react";

interface ExternalLinkProps
  extends LinkProps,
    HTMLAttributes<HTMLAnchorElement> {}

export const ExternalLink = ({
  className,
  href,
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
        "text-blue-500 darK:text-blue-600 break-words after:content-['_↗']",
        className,
      )}
    />
  );
};
