import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/utils/cn";
import { useTranslations } from "next-intl";
import { HTMLAttributes } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface NewsletterCardProps extends HTMLAttributes<HTMLDivElement> {}

export const NewsletterCard = ({
  className,
  ...props
}: NewsletterCardProps) => {
  const t = useTranslations("newsletter");

  return (
    <Card
      {...props}
      className={cn(
        "bg-background shadow-none transition-all hover:shadow-md",
        className,
      )}
    >
      <CardHeader className="space-y-4 p-4">
        <div className="space-y-1.5">
          <CardTitle className="text-[13px] !leading-normal text-gray-700 dark:text-gray-300">
            {t("title")}
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground dark:text-muted-foreground">
            {t("description")}
          </CardDescription>
        </div>
        <div className="flex items-center gap-2.5">
          <Input
            className="h-8 placeholder:text-xs"
            placeholder={t("placeholder")}
          />
          <Button size="sm">{t("label")}</Button>
        </div>
      </CardHeader>
    </Card>
  );
};
