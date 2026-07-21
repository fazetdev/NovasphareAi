"use client";

import type { ReactNode } from "react";

interface ConversationListHeaderProps {
  actions?: ReactNode;
  footer?: ReactNode;
  onNewChat?: () => void;
}

export function ConversationListHeader({
  actions,
  footer,
  onNewChat,
}: ConversationListHeaderProps) {
  return (
    <div className="space-y-3 border-b p-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">
          Chats
        </h2>

        <button
          type="button"
          onClick={() => onNewChat?.()}
          className="rounded-md border px-3 py-2 text-sm font-medium active:scale-95"
        >
          + New Chat
        </button>
      </div>

      {actions}

      {footer}
    </div>
  );
}
