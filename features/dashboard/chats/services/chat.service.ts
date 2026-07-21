import { getConversations, getMessages } from "./chat.mock";
import {
  ChatMessage,
  ConversationSummary,
} from "../types/chat.types";

export interface ServiceResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ChatService {
  getConversations(): Promise<ServiceResponse<ConversationSummary[]>>;
  getMessages(
    conversationId: string
  ): Promise<ServiceResponse<ChatMessage[]>>;
}

export const chatService: ChatService = {
  async getConversations() {
    return {
      success: true,
      data: getConversations(),
    };
  },

  async getMessages(conversationId: string) {
    return {
      success: true,
      data: getMessages(conversationId),
    };
  },
};
