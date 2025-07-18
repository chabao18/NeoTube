import { useIsMobile } from "@/hooks/use-mobile";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "./ui/drawer";

interface ResponsiveDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

export const ResponsiveModal = ({
  children,
  open,
  title,
  onOpenChange,
}: ResponsiveDialogProps) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
          </DrawerHeader>
          {children}
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
