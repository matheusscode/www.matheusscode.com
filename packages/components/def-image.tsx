import Transmutation from "@/ui/layout/transmutation-content";
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
    <Transmutation
      initial={{
        filter: "blur(2px)",
        opacity: 0,
      }}
      time={0.8}
    >
      <Image
        {...props}
        width={width}
        height={height}
        className={cn("mx-auto rounded-xl shadow-md transition-all", className)}
        priority
        objectFit={objectFit}
        quality={100}
      />
    </Transmutation>
  );
};
