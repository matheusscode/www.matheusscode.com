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
        "flex flex-col justify-center px-4 pb-16 pt-10 laptop:px-8 laptop:pt-24",
        className,
      )}
    >
      {children}
    </main>
  );
};
