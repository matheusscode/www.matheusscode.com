"use client";

import { ExternalLink } from "@/packages/components/eternal-link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/packages/components/ui/table";
import { registry_workspace } from "@/registry/registry-workspace";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";
import { useState } from "react";

export const WorkspaceDetailsTable = () => {
  const t = useTranslations("workspace");
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-[300px] px-4">
            {t("table_head_products")}
          </TableHead>
          <TableHead className="min-w-[300px] px-4">
            {t("table_head_specs")}
          </TableHead>
          <TableHead className="min-w-[70px] px-4 text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {registry_workspace.map((product) => {
          const isNotHovered = hovered !== null && hovered !== product.id;

          return (
            <TableRow
              key={`workspace-item-${product.id}`}
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "cursor-pointer select-none font-normal text-primary transition-all duration-300 ease-in-out",
                {
                  "blur-sm": isNotHovered,
                },
              )}
            >
              <TableCell className="px-4 py-3 font-medium">
                {product.product}
              </TableCell>
              <TableCell className="px-4 py-3">
                {t(product.key as never)}
              </TableCell>
              <TableCell className="px-4 py-3 font-medium">
                <ExternalLink
                  icon={false}
                  href={product.buy_path}
                  title={`Go to ${product.buy_path}`}
                >
                  {t("buy_button")}
                </ExternalLink>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableCaption className="py-3">
        {t("table_caption")}
        <ExternalLink href="https://some.wtf">some.wtf</ExternalLink>
      </TableCaption>
    </Table>
  );
};
