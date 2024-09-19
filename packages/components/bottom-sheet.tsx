import { DefaultNavigationContent } from "@/components/default-navigation-content";
import { Button, ButtonProps } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CommandIcon } from "lucide-react";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import useMediaQuery from "../hooks/use-media-query";
import { cn } from "../utils/cn";
import { DialogDescription, DialogTitle } from "./ui/dialog";

interface BottomSheetProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps {}

export function BottomSheet({
  className,
  variant = "outline",
  size = "icon",
  ...props
}: BottomSheetProps) {
  const [open, setOpen] = useState<boolean>(false);

  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (isLargeScreen && open) {
      setOpen(false);
    }
  }, [isLargeScreen, open]);

  if (isLargeScreen) {
    return null;
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
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
        <DialogTitle className="m-0 p-0" />
        <DialogDescription className="m-0 p-0" />
        <div className="mx-auto w-full max-w-lg">
          <ScrollArea className="h-[550px] px-4 pb-10">
            <DefaultNavigationContent niceClick={() => setOpen(!open)} />
          </ScrollArea>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
