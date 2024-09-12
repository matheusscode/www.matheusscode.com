import { ReactNode } from "react";

export default function CurriculumLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return <div className="h-screen w-full p-4">{children}</div>;
}
