import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/cn";

const dotVariants = cva("", {
  variants: {
    variant: {
      online: "bg-emerald-500",
      offline: "bg-zinc-100/20",
      stable: "bg-blue-500",
      danger: "bg-red-500",
    },
  },
  defaultVariants: {
    variant: "online",
  },
});

export interface DotProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof dotVariants> {}

const Dot = React.forwardRef<HTMLSpanElement, DotProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <span
        {...props}
        ref={ref}
        className={cn("relative flex w-2.5 h-2.5", className)}
      >
        <span
          className={cn(
            "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
            dotVariants({ variant }),
          )}
        />
        <span
          className={cn(
            "relative inline-flex rounded-full h-2.5 w-2.5",
            dotVariants({ variant }),
          )}
        />
      </span>
    );
  },
);

Dot.displayName = "Dot";

export { Dot };
