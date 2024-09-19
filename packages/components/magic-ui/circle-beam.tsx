import { cn } from "@/packages/utils/cn";
import { forwardRef, HTMLAttributes } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export interface CircleBeamProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  iconClass?: string;
}

export const CircleBeam = forwardRef<HTMLDivElement, CircleBeamProps>(
  (
    {
      className,
      children,
      iconClass,
      label,
      "aria-label": ariaLabel,
      ...props
    },
    ref,
  ) => {
    return (
      <Tooltip>
        <TooltipTrigger
          aria-label={ariaLabel}
          className={cn("z-10 transition-all", className)}
        >
          <div
            {...props}
            ref={ref}
            className={cn(
              "pointer-events-none flex size-10 select-none items-center justify-center rounded-full border bg-white p-1.5 shadow-sm transition-all",
              iconClass,
            )}
          >
            {children}
          </div>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-0.5">{label}</TooltipContent>
      </Tooltip>
    );
  },
);

CircleBeam.displayName = "CircleBeam";
