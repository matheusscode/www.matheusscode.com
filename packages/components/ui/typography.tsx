import { cva, VariantProps } from "class-variance-authority";
import React, { ElementType, HTMLAttributes } from "react";

const typographyVariants = cva("tracking-tight font-sans text-primary/95", {
  variants: {
    as: {
      h1: "text-6xl font-bold",
      h2: "text-5xl font-bold",
      h3: "text-4xl font-bold",
      h4: "text-3xl font-bold",
      h5: "text-2xl font-medium",
      h6: "text-xl font-medium",
      p: "text-sm font-normal",
      span: "text-xs  font-normal",
    },
  },
  defaultVariants: {
    as: "h1",
  },
});

interface TypographyProps
  extends VariantProps<typeof typographyVariants>,
    HTMLAttributes<HTMLElement> {}

const Typography = React.forwardRef<HTMLDivElement, TypographyProps>(
  ({ as, className, ...props }, ref) => {
    const Tag: ElementType = as || "h1";

    return (
      <Tag
        {...props}
        ref={ref}
        className={typographyVariants({ as, className })}
      />
    );
  },
);

Typography.displayName = "Typography";

export { Typography };
