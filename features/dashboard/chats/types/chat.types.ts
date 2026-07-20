export type ChatRole = "user" | "assistant";

export type MessageStatus =
  | "sending"
  | "streaming"
  | "sent"
  | "failed";

export interface ChatMessage {
  id: string;
  conversationId: string;
  role: ChatRole;
  content: string;
  timestamp: string;
  status?: MessageStatus;
}

export interface ConversationSummary {
  id: string;
  title: string;
  lastMessage: string;
  updatedAt: string;
}
