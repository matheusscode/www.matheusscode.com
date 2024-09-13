import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

interface MainTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title?: string;
}

export const MainTitle = ({
  children,
  className,
  title,
  ...props
}: MainTitleProps) => {
  return (
    <h1
      {...props}
      className={cn("font-sans text-lg font-medium tracking-tight", className)}
    >
      {children || title}
    </h1>
  );
};
