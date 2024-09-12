"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  registry_jobs,
  registry_jobs_columns,
  RegistryJob,
} from "@/registry/registry-jobs";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useState } from "react";

export const EmploymentDetailsTable = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="overflow-x-scroll w-full">
      <Table>
        <TableHeader>
          <TableRow>
            {registry_jobs_columns.map((column, index) => (
              <TableHead key={index} className="w-[300px] px-4">
                {column}
              </TableHead>
            ))}
            <TableHead className="w-[70px] px-4 text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="p-2 whitespace-nowrap">
          {registry_jobs.map((job: RegistryJob) => {
            const isNotHovered = hovered !== null && hovered !== job.id;

            return (
              <TableRow
                key={job.id}
                onMouseEnter={() => setHovered(job.id)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  "transition-all text-primary font-normal select-none cursor-pointer duration-300 ease-in-out",
                  {
                    "blur-sm": isNotHovered,
                  },
                )}
              >
                <TableCell className="px-4 py-3">{job.company}</TableCell>
                <TableCell className="px-4 py-3">
                  {job.beginning_and_end}
                </TableCell>
                <TableCell className="px-4 py-3">{job.office}</TableCell>
                <TableCell className="px-4 py-3">
                  <Link
                    className="text-blue-600 dark:text-blue-500 underline"
                    href={job.route}
                  >
                    {job.route}
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableCaption className="py-3">
          I worked on them all with all the affection and gratitude in the
          world. ❤️
        </TableCaption>
      </Table>
    </div>
  );
};
