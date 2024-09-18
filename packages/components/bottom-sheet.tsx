import { DefaultNavigationContent } from "@/components/default-navigation-content";
import { Button, ButtonProps } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CommandIcon } from "lucide-react";
import { ButtonHTMLAttributes } from "react";
import { cn } from "../utils/cn";

interface BottomSheetProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps {}

export function BottomSheet({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: BottomSheetProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          {...props}
          size={size}
          aria-label="bottom-sheet-bottom"
          variant={variant}
          className={cn(className)}
        >
          <CommandIcon size={17} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-lg">
          <ScrollArea className="h-[550px] px-4 pb-10">
            <DefaultNavigationContent />
          </ScrollArea>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
