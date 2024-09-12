import { cn } from "@/packages/utils/cn";
import { ComponentProps } from "react";

type SectionWrapperProps = ComponentProps<"div">;

export const SectionWrapper = ({
  className,
  ...props
}: SectionWrapperProps) => {
  return <section {...props} className={cn("w-full h-full", className)} />;
};
