import { DefaultNavigationContent } from "@/components/default-navigation-content";
import { ProfileLinkCard } from "@/components/profile-link-card";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
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
          <ScrollArea className="max-mobile:h-96 px-4 py-10">
            <DrawerHeader className="p-0">
              <ProfileLinkCard href="/" className="p-0" />
            </DrawerHeader>
            <DefaultNavigationContent />
          </ScrollArea>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
