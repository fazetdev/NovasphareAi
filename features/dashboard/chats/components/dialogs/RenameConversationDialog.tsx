"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface RenameConversationDialogProps {
  open: boolean;
  initialValue: string;
  onOpenChange: (open: boolean) => void;
  onConfirm: (title: string) => void;
}

export function RenameConversationDialog({
  open,
  initialValue,
  onOpenChange,
  onConfirm,
}: RenameConversationDialogProps) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  function handleSubmit() {
    const title = value.trim();

    if (!title) return;

    onConfirm(title);
    onOpenChange(false);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Rename Conversation
          </DialogTitle>

          <DialogDescription>
            Enter a new conversation name.
          </DialogDescription>
        </DialogHeader>

        <Input
          autoFocus
          value={value}
          placeholder="Conversation title"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button
            onClick={handleSubmit}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
