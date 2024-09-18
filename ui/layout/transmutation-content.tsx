"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { ComponentProps } from "react";

type Transition = {
  initial: Record<string, string | number>;
  animate: Record<string, string | number>;
};

interface TransmutationProps extends ComponentProps<typeof motion.div> {
  time?: number;
  transition: Transition;
}

export default function Transmutation({
  className,
  transition,
  time = 0.4,
  ...props
}: TransmutationProps) {
  return (
    <motion.div
      {...props}
      initial={transition?.initial}
      animate={transition?.animate}
      transition={{ ease: "easeIn", duration: time }}
      className={cn(className)}
    />
  );
}
