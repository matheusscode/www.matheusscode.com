import { cn } from "@/packages/utils/cn";
import { ElementType, HTMLAttributes } from "react";

interface ContentWrapperProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "nav";
}

export const ContentWrapper = ({
  as = "div",
  className,
  ...props
}: ContentWrapperProps) => {
  const Tag: ElementType = as;

  return (
    <Tag
      {...props}
      className={cn(
        "max-w-4xl z-10 mx-auto max-laptop:max-w-full w-full h-full",
        className,
      )}
    />
  );
};
