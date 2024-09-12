import { cn } from "@/utils/cn";
import { HTMLAttributes, ReactNode } from "react";

export const PageWrapper = ({
  children,
  className,
}: {
  children: Readonly<ReactNode>;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}) => {
  return (
    <main
      className={cn(
        "flex flex-col justify-center px-8 pb-16 pt-24 max-laptop:px-4 max-laptop:pt-10",
        className,
      )}
    >
      {children}
    </main>
  );
};
