import { ReactNode } from "react";

export default function CurriculumLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return <div className="w-full p-4">{children}</div>;
}
