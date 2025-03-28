import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/shadcn/ui/button";
import { AlertDialog } from "../wrappers/AlertDialog";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
  argTypes: {
    triggerVariant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    onAction: { action: "actionConfirmed" },
    onOpenChange: { action: "openChanged" },
  },
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

// Basic usage
export const Basic: Story = {
  args: {
    title: "Are you absolutely sure?",
    description:
      "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
    actionText: "Continue",
    cancelText: "Cancel",
  },
};

// With custom trigger
export const CustomTrigger: Story = {
  args: {
    triggerText: "Delete Account",
    triggerVariant: "destructive",
    title: "Delete account",
    description: "Are you sure you want to delete your account? All your data will be permanently removed.",
    actionText: "Delete",
  },
};

// With children as trigger
export const WithCustomTriggerElement: Story = {
  args: {
    title: "Custom trigger dialog",
    description: "This dialog was triggered by a custom element",
    actionText: "Confirm",
    children: <Button variant="outline">Custom Trigger</Button>,
  },
};

// Controlled example
export const Controlled: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-4">
        <AlertDialog {...args} />
        <Button onClick={() => args.onOpenChange?.(true)}>Open Controlled Dialog</Button>
      </div>
    );
  },
  args: {
    title: "Controlled Dialog",
    description: "This dialog is controlled by the parent component",
    actionText: "OK",
  },
};
