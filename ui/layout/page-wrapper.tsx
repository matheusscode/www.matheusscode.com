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
        "flex flex-col justify-center  pt-24 max-laptop:p-16 max-laptop:px-2 px-8 pb-16",
        className,
      )}
    >
      {children}
    </main>
  );
};
