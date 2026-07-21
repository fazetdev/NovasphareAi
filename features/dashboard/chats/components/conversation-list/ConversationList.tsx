"use client";

import { ConversationSummary } from "../../types/chat.types";
import { ConversationItem } from "./ConversationItem";

interface ConversationListProps {
  conversations: ConversationSummary[];
  activeConversationId?: string;
  onSelect?: (id: string) => void;
  onRename?: (id: string) => void;
  onDelete?: (id: string) => void;
  onPin?: (id: string) => void;
  onArchive?: (id: string) => void;
}

export function ConversationList({
  conversations,
  activeConversationId,
  onSelect,
  onRename,
  onDelete,
  onPin,
  onArchive,
}: ConversationListProps) {
  return (
    <div className="flex flex-col">
      {conversations.map((conversation) => (
        <ConversationItem
          key={conversation.id}
          conversation={conversation}
          active={conversation.id === activeConversationId}
          onSelect={onSelect}
          onRename={onRename}
          onDelete={onDelete}
          onPin={onPin}
          onArchive={onArchive}
        />
      ))}
    </div>
  );
}
