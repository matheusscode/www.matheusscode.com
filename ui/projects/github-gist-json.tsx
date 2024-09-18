"use client";

import { Button } from "@/packages/components/ui/button";
import { cn } from "@/packages/utils/cn";
import { formatJSON } from "@/packages/utils/json";
import transitions from "@/registry/registry-animations";
import { useTranslations } from "next-intl";
import { HTMLAttributes, useState } from "react";
import { toast } from "sonner";
import Transmutation from "../layout/transmutation-content";

export interface GithubGistJSONProps extends HTMLAttributes<HTMLPreElement> {
  schema: Readonly<string>;
}

export const GithubGistJSON = ({
  schema,
  className,
  ...props
}: GithubGistJSONProps) => {
  const [hasCopied, setHasCopied] = useState<boolean>(false);
  const t = useTranslations("projects");
  const formattedJSON = formatJSON(schema);

  const onCopy = () => {
    navigator.clipboard
      .writeText(formattedJSON)
      .then(() => {
        toast(t("gist_cliboard_success"));
        setHasCopied(true);
        setTimeout(() => {
          setHasCopied(false);
        }, 3000);
      })
      .catch((err) => {
        setHasCopied(false);
        toast(`${t("gist_cliboard_error")}: ${err}`);
      });
  };

  return (
    <div className="mt-3.5 w-full gap-2 overflow-hidden rounded-md border border-input shadow-md">
      <Transmutation className="h-full w-full" transition={transitions.reveal}>
        <div className="flex justify-between border-b border-input bg-white px-3 py-2 dark:bg-accent/50">
          <span className="text-base text-primary/90">settings.json</span>
          <Button
            aria-label="gist-clipboard"
            variant="outline"
            size="sm"
            className="h-6"
            onClick={onCopy}
          >
            {hasCopied
              ? t("gist_cliboard_label_copied")
              : t("gist_cliboard_label_copy")}
          </Button>
        </div>
      </Transmutation>
      <div className="px-3 py-2">
        <Transmutation
          className="h-full w-full"
          transition={transitions.reveal}
        >
          <pre
            {...props}
            className={cn(
              "h-96 w-full overflow-hidden overflow-y-scroll font-mono text-muted-foreground/70",
              className,
            )}
          >
            {formattedJSON}
          </pre>
        </Transmutation>
      </div>
    </div>
  );
};
