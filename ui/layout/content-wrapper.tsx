import { cn } from "@/utils/cn";
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
        "z-10 mx-auto h-full w-full max-w-4xl whitespace-break-spaces max-laptop:max-w-full",
        className,
      )}
    />
  );
};
