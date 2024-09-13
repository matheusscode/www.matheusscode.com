import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return children;
}
