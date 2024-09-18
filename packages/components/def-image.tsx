import transitions from "@/registry/registry-animations";
import Transmutation from "@/ui/layout/transmutation-content";
import { cn } from "@/utils/cn";
import Image, { ImageProps } from "next/image";
import { HTMLAttributes } from "react";

interface DefImageProps
  extends ImageProps,
    Omit<HTMLAttributes<HTMLImageElement>, "objectFit"> {}

export const DefImage = ({
  className,
  width = 100,
  height = 100,
  ...props
}: DefImageProps) => {
  return (
    <Transmutation transition={transitions.reveal} time={0.8}>
      <Image
        {...props}
        width={width}
        height={height}
        className={cn("mx-auto rounded-xl shadow-md transition-all", className)}
        priority
        quality={100}
      />
    </Transmutation>
  );
};
