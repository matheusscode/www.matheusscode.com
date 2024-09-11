import { constructMetadata } from "@/packages/utils/construct-metadata";
import { geistSans } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
