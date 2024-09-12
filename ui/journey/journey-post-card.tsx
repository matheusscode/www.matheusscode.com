import { cn } from "@/packages/utils/cn";
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
        <p className="text-sm mb-2">{content.description}</p>
      )}

      {content.picture && (
        <div className="mt-2.5 max-w-[596px] w-full  overflow-hidden rounded-xl">
          <img
            src={content.picture}
            alt={content.title || content.description}
            className="w-full h-[720px] object-cover"
          />
        </div>
      )}
    </div>
  );
};
