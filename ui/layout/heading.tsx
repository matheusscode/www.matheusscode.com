import Balancer from "react-wrap-balancer";

import { cn } from "@/packages/utils/cn";
import { HTMLAttributes } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLElement> {
  title: string;
  subTitle?: string;
}

export const Heading = ({
  title,
  subTitle,
  className,
  ...props
}: HeadingProps) => {
  return (
    <div className={cn("mb-6", className)}>
      <Balancer {...props} as="h1">
        {title}
      </Balancer>
      {subTitle}
    </div>
  );
};
