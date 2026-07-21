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
    pinned: true,
    unreadCount: 0,
  },
  {
    id: "2",
    title: "Sales Assistant",
    lastMessage: "Your pipeline report is ready.",
    updatedAt: "10:15 AM",
    unreadCount: 2,
  },
  {
    id: "3",
    title: "Knowledge Base",
    lastMessage: "3 new documents indexed.",
    updatedAt: "Yesterday",
  },
  {
    id: "4",
    title: "Support Inbox",
    lastMessage: "Customer replied.",
    updatedAt: "Yesterday",
  },
  {
    id: "5",
    title: "Marketing Agent",
    lastMessage: "Campaign draft completed.",
    updatedAt: "Mon",
    archived: true,
  },
];

const messages: ChatMessage[] = [
  {
    id: "m1",
    conversationId: "1",
    role: "assistant",
    content: "Hello! Welcome to NovaCore AI. How can I assist you today?",
    timestamp: "09:30 AM",
    status: "sent",
  },

  {
    id: "m2",
    conversationId: "2",
    role: "user",
    content: "Show today's sales summary.",
    timestamp: "10:10 AM",
    status: "sent",
  },
  {
    id: "m3",
    conversationId: "2",
    role: "assistant",
    content: "Today's sales increased by 14% compared to yesterday.",
    timestamp: "10:15 AM",
    status: "sent",
  },

  {
    id: "m4",
    conversationId: "3",
    role: "assistant",
    content: "Three new documents have been indexed successfully.",
    timestamp: "Yesterday",
    status: "sent",
  },

  {
    id: "m5",
    conversationId: "4",
    role: "assistant",
    content: "Your customer has replied to ticket #2041.",
    timestamp: "Yesterday",
    status: "sent",
  },

  {
    id: "m6",
    conversationId: "5",
    role: "assistant",
    content: "The campaign draft is ready for review.",
    timestamp: "Mon",
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
