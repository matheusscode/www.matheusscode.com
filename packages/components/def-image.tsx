import { cn } from "@/utils/cn";
import Image, { ImageProps } from "next/image";
import { HTMLAttributes } from "react";

interface DefImageProps extends ImageProps, HTMLAttributes<HTMLImageElement> {}

export const DefImage = ({
  className,
  width = 100,
  objectFit = "cover",
  height = 100,
  ...props
}: DefImageProps) => {
  return (
    <Image
      {...props}
      width={width}
      height={height}
      className={cn("transition-all rounded-xl mx-auto shadow-md", className)}
      priority
      objectFit={objectFit}
      quality={100}
    />
  );
};
