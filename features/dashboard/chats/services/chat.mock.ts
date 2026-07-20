import {
  ChatMessage,
  ConversationSummary,
} from "../types/chat.types";

const conversations: ConversationSummary[] = [
  {
    id: "1",
    title: "Welcome",
    lastMessage: "How can I help you today?",
    updatedAt: "09:30 AM",
  },
];

const messages: ChatMessage[] = [
  {
    id: "m1",
    conversationId: "1",
    role: "assistant",
    content: "Hello! How can I assist you today?",
    timestamp: "09:30 AM",
    status: "sent",
  },
];

export function getConversations() {
  return conversations;
}

export function getMessages(conversationId: string) {
  return messages.filter(
    (message) => message.conversationId === conversationId
  );
}
