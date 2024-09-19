"use client";

import { useRef } from "react";

import { AnimatedBeam } from "@/packages/components/magic-ui/animated-beam";

import { CircleBeam } from "@/packages/components/magic-ui/circle-beam";
import Icons from "@/registry/registry-icons";
import { registry_myself } from "@/registry/registry-myself";
import Image from "next/image";

export const StackBeam = () => {
  const time = 10;
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const divMainRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-transparent"
      ref={containerRef}
    >
      <div className="my-auto flex size-full h-auto max-w-lg flex-col items-stretch justify-between gap-10 px-4 py-6">
        <div className="relative flex flex-row items-center justify-between">
          <CircleBeam
            aria-label="tailwindcss-button"
            ref={div1Ref}
            className="absolute left-auto top-14 laptop:left-28"
            label="Tailwind CSS"
          >
            <Icons.tailwindcss />
          </CircleBeam>
          <CircleBeam
            aria-label="react-button"
            ref={div2Ref}
            className="mx-auto"
            label="React"
          >
            <Icons.react />
          </CircleBeam>
          <CircleBeam
            aria-label="datadog-button"
            ref={div3Ref}
            className="absolute left-auto right-0 top-14 laptop:right-28"
            label="Datadog"
          >
            <Icons.datadog />
          </CircleBeam>
        </div>
        <div className="flex flex-row items-center justify-between">
          <CircleBeam
            aria-label="nextjs-button"
            ref={div4Ref}
            className="ml-16"
            label="Next.js"
          >
            <Icons.nextjs />
          </CircleBeam>
          <CircleBeam
            aria-label="me-button"
            ref={divMainRef}
            className="z-10 my-10 p-0.5"
            iconClass="size-20"
            label="Me"
          >
            <Image
              src={registry_myself.avatar_url}
              alt={registry_myself.username}
              width={74}
              height={74}
              priority
              className="rounded-full"
            />
          </CircleBeam>
          <CircleBeam
            aria-label="prisma-button"
            ref={div5Ref}
            className="mr-16"
            label="Prisma"
          >
            <Icons.prisma />
          </CircleBeam>
        </div>
        <div className="relative flex flex-row items-center justify-between">
          <CircleBeam
            aria-label="figma-button"
            ref={div7Ref}
            className="absolute bottom-14 left-auto laptop:left-28"
            label="Figma"
          >
            <Icons.figma />
          </CircleBeam>
          <CircleBeam
            aria-label="nodejs-button"
            ref={div6Ref}
            className="mx-auto"
            label="Node.js"
          >
            <Icons.nodejs />
          </CircleBeam>
          <CircleBeam
            aria-label="postgresql-button"
            ref={div8Ref}
            className="absolute bottom-14 left-auto right-0 laptop:right-28"
            label="PostgreSQL"
          >
            <Icons.postgresql />
          </CircleBeam>
        </div>
      </div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={divMainRef}
        startXOffset={10}
        duration={time}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={divMainRef}
        duration={time}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={divMainRef}
        duration={time}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={divMainRef}
        duration={time}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={divMainRef}
        duration={time}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={divMainRef}
        duration={time}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={divMainRef}
        duration={time}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={divMainRef}
        duration={time}
        reverse
      />
    </div>
  );
};
