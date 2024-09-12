import { cn } from "@/packages/utils/cn";
import { HTMLAttributes } from "react";

interface JourneyConnectingLineProps extends HTMLAttributes<HTMLDivElement> {}

export const JourneyConnectingLine = ({
  className,
  ...props
}: JourneyConnectingLineProps) => {
  return (
    <div className="absolute inset-0 flex w-6 items-center justify-center">
      <div
        {...props}
        className={cn(
          "pointer-events-none h-full w-px border-l-[1px] border-gray-200 dark:border-gray-700/50",
          className,
        )}
      ></div>
    </div>
  );
};
