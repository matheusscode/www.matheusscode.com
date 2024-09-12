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
        "flex flex-col justify-center max-w-4xl mx-auto pt-24 px-8 pb-16",
        className,
      )}
    >
      {children}
    </main>
  );
};
