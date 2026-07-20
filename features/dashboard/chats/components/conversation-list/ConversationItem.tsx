"use client";

import { ConversationSummary } from "../../types/chat.types";

interface ConversationItemProps {
  conversation: ConversationSummary;
  active?: boolean;
  onSelect?: (id: string) => void;
}

export function ConversationItem({
  conversation,
  active = false,
  onSelect,
}: ConversationItemProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(conversation.id)}
      className={`w-full border-b px-4 py-3 text-left transition-colors ${
        active
          ? "bg-muted"
          : "hover:bg-muted/50"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="truncate font-medium">
          {conversation.title}
        </h3>

        <span className="text-xs text-muted-foreground">
          {conversation.updatedAt}
        </span>
      </div>

      <p className="mt-1 truncate text-sm text-muted-foreground">
        {conversation.lastMessage}
      </p>
    </button>
  );
}
