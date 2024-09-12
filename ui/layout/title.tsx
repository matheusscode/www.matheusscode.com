import { cn } from "@/packages/utils/cn";
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
      className={cn("text-lg font-medium tracking-tight font-sans", className)}
    >
      {children || title}
    </h1>
  );
};
