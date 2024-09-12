import { cn } from "@/packages/utils/cn";
import { HTMLAttributes } from "react";

interface JourneyTimeLineProps extends HTMLAttributes<HTMLDivElement> {
  date: string;
  isLastPost: boolean;
}

export const JourneyTimeLine = ({
  date,
  className,
  isLastPost,
  ...props
}: JourneyTimeLineProps) => {
  return (
    <div {...props} className={cn("flex items-center min-w-16", className)}>
      {isLastPost && (
        <>
          <h2>{date}</h2>
        </>
      )}
    </div>
  );
};
