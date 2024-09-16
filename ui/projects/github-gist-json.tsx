import { Button } from "@/packages/components/ui/button";
import { cn } from "@/packages/utils/cn";
import { formatJSON } from "@/packages/utils/json";
import { HTMLAttributes } from "react";

export interface GithubGistJSONProps extends HTMLAttributes<HTMLPreElement> {
  schema: Readonly<string>;
}

export const GithubGistJSON = ({
  schema,
  className,
  ...props
}: GithubGistJSONProps) => {
  const formattedJSON = formatJSON(schema);

  return (
    <div className="mt-3.5 w-full gap-2 rounded-md border border-input shadow-md">
      <div className="flex justify-between border-b border-input bg-accent/50 px-3 py-2">
        <span className="text-base text-primary/90">settings.json</span>
        <Button
          aria-label="gist-clipboard"
          variant="outline"
          size="sm"
          className="h-6"
        >
          Copy
        </Button>
      </div>
      <div className="px-3 py-2">
        <pre
          {...props}
          className={cn(
            "h-96 w-full overflow-hidden overflow-y-scroll font-mono text-muted-foreground/70",
            className,
          )}
        >
          {formattedJSON}
        </pre>
      </div>
    </div>
  );
};
