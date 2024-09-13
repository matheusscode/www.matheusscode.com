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
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

export const EmploymentDetailsTable = () => {
  const t = useTranslations("welcome");
  const [hovered, setHovered] = useState<number | null>(null);

  return (
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
      <TableBody className="whitespace-nowrap p-2">
        {registry_jobs.map((job: RegistryJob) => {
          const isNotHovered = hovered !== null && hovered !== job.id;

          return (
            <TableRow
              key={job.id}
              onMouseEnter={() => setHovered(job.id)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "cursor-pointer select-none font-normal text-primary transition-all duration-300 ease-in-out",
                {
                  "blur-sm": isNotHovered,
                },
              )}
            >
              <TableCell className="px-4 py-3">
                {t(`${job.key}_table_office` as never)}
              </TableCell>
              <TableCell className="px-4 py-3">
                {t(`${job.key}_table_period` as never)}
              </TableCell>
              <TableCell className="px-4 py-3">{job.office}</TableCell>
              <TableCell className="px-4 py-3">
                <Link
                  className="text-blue-600 underline dark:text-blue-500"
                  href={job.route}
                >
                  {job.route}
                </Link>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableCaption className="py-3">{t("congratulations")} ❤️</TableCaption>
    </Table>
  );
};
