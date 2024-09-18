import { cn } from "@/packages/utils/cn";
import { HTMLAttributes } from "react";

export interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer
      {...props}
      className={cn("flex w-full flex-col gap-1 p-4", className)}
    >
      <h1 className="text-lg text-primary">www.matheusscode.com</h1>
      <p className="text-sm text-muted-foreground">
        Follow my journey as a Software Engineer and Architect. Explore my
        personal projects and blog posts.
      </p>
    </footer>
  );
};
