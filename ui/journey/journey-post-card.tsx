import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

export type JourneyDataProps = {
  title?: string;
  description?: string;
  media?: string;
};

interface JourneyPostCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "content"> {
  content: JourneyDataProps;
}

export const JourneyPostCard = ({
  content,
  className,
  ...props
}: JourneyPostCardProps) => {
  return (
    <div
      {...props}
      className={cn("word-break-word flex flex-col text-pretty", className)}
    >
      <h1 className="text-base font-semibold tracking-tighter">
        {content.title}
      </h1>
      {content.description && (
        <p className="mb-2 text-sm">{content.description}</p>
      )}
      {content.media && (
        <div className="my-2.5 h-auto w-auto">
          <img
            src={content.media}
            alt={content.title!}
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      )}
    </div>
  );
};
