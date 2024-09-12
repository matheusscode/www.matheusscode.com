import Balancer, { BalancerOwnProps } from "react-wrap-balancer";

import { cn } from "@/packages/utils/cn";
import { HTMLAttributes } from "react";

export interface HeadingProps
  extends HTMLAttributes<HTMLElement>,
    BalancerOwnProps {
  title: string;
  subTitle?: string;
}

export const Heading = ({
  title,
  as = "h1",
  subTitle,
  className,
  ...props
}: HeadingProps) => {
  return (
    <div className={cn("mb-6", className)}>
      <Balancer {...props} as={as}>
        {title}
      </Balancer>
      {subTitle}
    </div>
  );
};
