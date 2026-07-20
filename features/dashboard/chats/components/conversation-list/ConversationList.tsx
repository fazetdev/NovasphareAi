"use client";

import { ConversationSummary } from "../../types/chat.types";
import { ConversationItem } from "./ConversationItem";

interface ConversationListProps {
  conversations: ConversationSummary[];
  activeConversationId?: string;
  onSelect?: (id: string) => void;
}

export function ConversationList({
  conversations,
  activeConversationId,
  onSelect,
}: ConversationListProps) {
  return (
    <div className="flex flex-col">
      {conversations.map((conversation) => (
        <ConversationItem
          key={conversation.id}
          conversation={conversation}
          active={conversation.id === activeConversationId}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
