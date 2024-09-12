import { cn } from "@/utils/cn";
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
    <div {...props} className={cn("flex min-w-16 items-center", className)}>
      {isLastPost && (
        <>
          <h2>{date}</h2>
        </>
      )}
    </div>
  );
};
