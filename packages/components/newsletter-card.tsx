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
  const t = useTranslations("MainNav");

  return (
    <Card
      {...props}
      className={cn(
        "transition-all bg-background shadow-none hover:shadow-md",
        className,
      )}
    >
      <CardHeader className="p-4 space-y-4">
        <div className="space-y-1.5">
          <CardTitle className="text-gray-500 !leading-normal text-[13px]">
            {t("Newsletter.title")}
          </CardTitle>
          <CardDescription className="text-muted-foreground/70 text-xs">
            {t("Newsletter.description")}
          </CardDescription>
        </div>
        <div className="flex items-center gap-2.5">
          <Input
            className="h-8 placeholder:text-xs"
            placeholder={t("Newsletter.placeholder")}
          />
          <Button size="sm">{t("Newsletter.label")}</Button>
        </div>
      </CardHeader>
    </Card>
  );
};
