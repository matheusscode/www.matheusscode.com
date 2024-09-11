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
        "flex flex-col max-w-5xl w-full mx-auto pt-24 max-[1000px]:px-4 px-8 pb-16",
        className,
      )}
    >
      {children}
    </main>
  );
};
