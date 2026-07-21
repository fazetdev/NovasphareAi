export type ChatRole = "user" | "assistant" | "system";

export type MessageStatus =
  | "sending"
  | "streaming"
  | "sent"
  | "failed";

export type ConversationFilter =
  | "all"
  | "pinned"
  | "archived";

export interface ChatMessage {
  id: string;
  conversationId: string;
  role: ChatRole;
  content: string;
  timestamp: string;
  status: MessageStatus;
  edited?: boolean;
}

export interface ConversationSummary {
  id: string;
  title: string;
  lastMessage: string;
  updatedAt: string;
  unreadCount?: number;
  pinned?: boolean;
  archived?: boolean;
}
