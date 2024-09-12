import { TooltipProvider } from "@/packages/components/ui/tooltip";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";

export default async function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider delayDuration={50}>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
