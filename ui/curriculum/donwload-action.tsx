"use client";

import { Button } from "@/packages/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/packages/components/ui/tooltip";
import { DownloadIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export const DownloadAction = () => {
  const t = useTranslations("globals");
  const handlePrint = () => {
    window.print();
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrint}
          className="hover:bg-primary-dark flex h-9 w-9 items-center justify-center gap-2 rounded text-white hover:bg-accent"
        >
          <DownloadIcon size={17} />
        </Button>
      </TooltipTrigger>
      <TooltipContent sideOffset={6} align="center" side="bottom">
        {t("donwload")}
      </TooltipContent>
    </Tooltip>
  );
};
