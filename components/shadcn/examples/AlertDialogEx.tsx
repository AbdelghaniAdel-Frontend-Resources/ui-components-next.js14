"use client";
import React from "react";
import { AlertDialog } from "../wrappers/AlertDialog";
import { Button } from "../ui/button";

const AlertDialogEx = () => {
  return (
    <div>
      <AlertDialog
        title="Are you sure?"
        description="This action cannot be undone."
        actionText="Confirm"
        onAction={() => console.log("Action confirmed")}
        triggerVariant="secondary"
      />

      <AlertDialog
        title="Delete Account"
        description="This will permanently delete your account."
        actionText="Delete"
        onAction={() => console.log("Action confirmed")}
        triggerText="Delete Account"
        triggerVariant="ghost"
      >
        <Button variant="destructive">Custom Trigger</Button>
      </AlertDialog>
    </div>
  );
};

export default AlertDialogEx;
