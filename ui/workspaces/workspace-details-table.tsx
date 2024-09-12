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
import { cn } from "@/packages/utils/cn";
import { registry_workspace } from "@/registry/registry-workspace";
import { useState } from "react";

export const WorkspaceDetailsTable = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-[300px] px-4">Product</TableHead>
          <TableHead className="min-w-[300px] px-4">Specs</TableHead>
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
                "transition-all text-primary font-normal select-none cursor-pointer duration-300 ease-in-out",
                {
                  "blur-sm": isNotHovered,
                },
              )}
            >
              <TableCell className="px-4 py-3 font-medium">
                {product.product}
              </TableCell>
              <TableCell className="px-4 py-3">{product.spec}</TableCell>
              <TableCell className="px-4 py-3 font-medium">
                <ExternalLink
                  href={product.buy_path}
                  title={`Go to ${product.buy_path}`}
                >
                  Buy
                </ExternalLink>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableCaption className="py-3">
        For other cool stuff, don&lsquo;t forget to check{" "}
        <ExternalLink href="https://some.wtf">some.wtf</ExternalLink>
      </TableCaption>
    </Table>
  );
};
