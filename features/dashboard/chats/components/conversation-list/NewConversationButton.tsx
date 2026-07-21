"use client";

import { Plus } from "lucide-react";

interface NewConversationButtonProps {
  onClick: () => void;
}

export function NewConversationButton({
  onClick,
}: NewConversationButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
    >
      <Plus className="h-4 w-4" />
      New Chat
    </button>
  );
}
