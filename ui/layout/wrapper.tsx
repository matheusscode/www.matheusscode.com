import { cn } from "@/packages/utils/cn";
import { ElementType, HTMLAttributes } from "react";

interface WrapperProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "nav";
}

export const Wrapper = ({ as = "div", className, ...props }: WrapperProps) => {
  const Tag: ElementType = as;

  return (
    <Tag
      {...props}
      className={cn(
        "max-w-4xl mx-auto max-laptop:max-w-full w-full h-full",
        className,
      )}
    />
  );
};
