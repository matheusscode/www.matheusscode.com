import { unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

export default function CurriculumLayout({
  children,
  params: { locale },
}: {
  children: Readonly<ReactNode>;
  params: {
    locale: string;
  };
}) {
  unstable_setRequestLocale(locale);
  return <div className="w-full p-4">{children}</div>;
}
