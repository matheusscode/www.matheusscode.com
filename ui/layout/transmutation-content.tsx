"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { ComponentProps } from "react";

interface TransmutationProps extends ComponentProps<typeof motion.div> {
  time?: number;
}

const defaultInitialValues = {
  y: -6,
  opacity: 0,
};

const defaultAnimateValues = {
  y: 0,
  opacity: 1,
  filter: "blur(0px)",
};

export default function Transmutation({
  className,
  initial = defaultInitialValues,
  animate = defaultAnimateValues,
  time = 0.3,
  ...props
}: TransmutationProps) {
  return (
    <motion.div
      {...props}
      initial={initial}
      animate={animate}
      transition={{ ease: "easeIn", duration: time }}
      className={cn("overflow-hidden", className)}
    />
  );
}
