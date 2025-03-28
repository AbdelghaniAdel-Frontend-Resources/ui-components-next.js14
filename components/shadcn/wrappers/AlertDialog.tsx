"use client";

import {
  AlertDialog as ShadCnAlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/shadcn/ui/alert-dialog";
import { Button, ButtonProps } from "@/components/shadcn/ui/button";
import { ReactNode } from "react";

type AlertDialogWrapperProps = {
  triggerText?: string;
  triggerVariant?: ButtonProps["variant"];
  triggerClassName?: string;
  title: string;
  description: string;
  cancelText?: string;
  actionText: string;
  onAction: () => void;
  children?: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function AlertDialog({
  triggerText = "Open",
  triggerVariant = "default",
  triggerClassName = "",
  title,
  description,
  cancelText = "Cancel",
  actionText,
  onAction,
  children,
  open,
  onOpenChange,
}: AlertDialogWrapperProps) {
  return (
    <ShadCnAlertDialog open={open} onOpenChange={onOpenChange}>
      {children ? (
        <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      ) : (
        <AlertDialogTrigger asChild>
          <Button variant={triggerVariant} className={triggerClassName}>
            {triggerText}
          </Button>
        </AlertDialogTrigger>
      )}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelText}</AlertDialogCancel>
          <AlertDialogAction onClick={onAction}>{actionText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </ShadCnAlertDialog>
  );
}
