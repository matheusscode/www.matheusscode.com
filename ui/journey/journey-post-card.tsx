import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

export type JourneyDataProps = {
  title?: string;
  description?: string;
  picture?: string;
  index?: number;
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
    <div {...props} className={cn("word-break-word flex flex-col", className)}>
      <span className="font-semibold tracking-tighter">{content.title}</span>
      {content.description && (
        <p className="mb-2 text-sm">{content.description}</p>
      )}
      {content.picture && (
        <div className="mt-2.5 w-full max-w-[596px] overflow-hidden rounded-xl">
          <img
            src={content.picture}
            alt={content.title || content.description}
            className="h-[720px] w-full object-cover"
          />
        </div>
      )}
    </div>
  );
};
