"use client";

import { useState } from "react";
import { MoreVertical, Pin } from "lucide-react";

import { ConversationSummary } from "../../types/chat.types";

interface ConversationItemProps {
  conversation: ConversationSummary;
  active?: boolean;
  onSelect?: (id: string) => void;
  onRename?: (id: string) => void;
  onDelete?: (id: string) => void;
  onPin?: (id: string) => void;
  onArchive?: (id: string) => void;
}

export function ConversationItem({
  conversation,
  active = false,
  onSelect,
  onRename,
  onDelete,
  onPin,
  onArchive,
}: ConversationItemProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`relative border-b transition ${
        active ? "bg-muted" : "hover:bg-muted/50"
      }`}
    >
      <button
        type="button"
        onClick={() => onSelect?.(conversation.id)}
        className="w-full px-4 py-3 text-left"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              {conversation.pinned && (
                <Pin className="h-3.5 w-3.5 text-muted-foreground" />
              )}

              <h3 className="truncate font-medium">
                {conversation.title}
              </h3>
            </div>

            <p className="mt-1 truncate text-sm text-muted-foreground">
              {conversation.lastMessage || "No messages yet"}
            </p>
          </div>

          <span className="text-xs text-muted-foreground">
            {conversation.updatedAt}
          </span>
        </div>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen((v) => !v);
        }}
        className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted"
      >
        <MoreVertical className="h-4 w-4" />
      </button>

      {menuOpen && (
        <div className="absolute right-2 top-10 z-20 w-40 rounded-lg border bg-background shadow-lg">
          <button
            className="w-full px-4 py-2 text-left hover:bg-muted"
            onClick={() => {
              onRename?.(conversation.id);
              setMenuOpen(false);
            }}
          >
            Rename
          </button>

          <button
            className="w-full px-4 py-2 text-left hover:bg-muted"
            onClick={() => {
              onPin?.(conversation.id);
              setMenuOpen(false);
            }}
          >
            {conversation.pinned ? "Unpin" : "Pin"}
          </button>

          <button
            className="w-full px-4 py-2 text-left hover:bg-muted"
            onClick={() => {
              onArchive?.(conversation.id);
              setMenuOpen(false);
            }}
          >
            Archive
          </button>

          <button
            className="w-full px-4 py-2 text-left text-red-600 hover:bg-muted"
            onClick={() => {
              onDelete?.(conversation.id);
              setMenuOpen(false);
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
