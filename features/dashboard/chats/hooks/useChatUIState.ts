"use client";

import { useEffect, useMemo, useState } from "react";

import { chatService } from "../services/chat.service";
import {
  ChatMessage,
  ConversationFilter,
  ConversationSummary,
} from "../types/chat.types";

export function useChatUIState() {
  const [conversations, setConversations] = useState<ConversationSummary[]>([]);
  const [messagesByConversation, setMessagesByConversation] = useState<
    Record<string, ChatMessage[]>
  >({});
  const [activeConversationId, setActiveConversationId] = useState("");
  const [isNewChat, setIsNewChat] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<ConversationFilter>("all");
  const [composerValue, setComposerValue] = useState("");

  useEffect(() => {
    async function loadConversations() {
      const response = await chatService.getConversations();

      if (!response.success) return;

      setConversations(response.data);
    }

    void loadConversations();
  }, []);

  const filteredConversations = useMemo(() => {
    const query = search.trim().toLowerCase();

    return conversations.filter((conversation) => {
      const matchesSearch =
        !query ||
        conversation.title.toLowerCase().includes(query) ||
        conversation.lastMessage.toLowerCase().includes(query);

      const matchesFilter =
        filter === "all" ||
        (filter === "pinned" && conversation.pinned) ||
        (filter === "archived" && conversation.archived);

      return matchesSearch && matchesFilter;
    });
  }, [conversations, search, filter]);

  const messages =
    activeConversationId && !isNewChat
      ? messagesByConversation[activeConversationId] ?? []
      : [];

  function createConversation() {
    setActiveConversationId("");
    setMessagesByConversation({});
    setComposerValue("");
    setIsNewChat(true);
  }

  function selectConversation(id: string) {
    setActiveConversationId(id);
    setIsNewChat(false);
  }

  function addMessage(message: ChatMessage) {
    setMessagesByConversation((current) => ({
      ...current,
      [message.conversationId]: [
        ...(current[message.conversationId] ?? []),
        message,
      ],
    }));
  }

  function sendMessage(content: string) {
    let conversationId = activeConversationId;

    if (!conversationId) {
      conversationId = crypto.randomUUID();

      setConversations((current) => [
        {
          id: conversationId,
          title: content.slice(0, 40),
          lastMessage: content,
          updatedAt: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          pinned: false,
          archived: false,
          unreadCount: 0,
        },
        ...current,
      ]);

      setActiveConversationId(conversationId);
    }

    setIsNewChat(false);

    addMessage({
      id: crypto.randomUUID(),
      conversationId,
      role: "user",
      content,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "sent",
    });

    setComposerValue("");
    setIsTyping(true);

    setTimeout(() => {
      addMessage({
        id: crypto.randomUUID(),
        conversationId,
        role: "assistant",
        content:
          "I received your message. NovaCore AI is ready to assist you.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        status: "sent",
      });

      setIsTyping(false);
    }, 1200);
  }

  function renameConversation(id: string) {
    const title = window.prompt("Rename conversation");

    if (!title?.trim()) return;

    setConversations((current) =>
      current.map((conversation) =>
        conversation.id === id
          ? {
              ...conversation,
              title: title.trim(),
            }
          : conversation
      )
    );
  }

  function deleteConversation(id: string) {
    setConversations((current) =>
      current.filter((conversation) => conversation.id !== id)
    );

    setMessagesByConversation((current) => {
      const next = { ...current };
      delete next[id];
      return next;
    });

    if (activeConversationId === id) {
      setActiveConversationId("");
      setIsNewChat(true);
    }
  }

  function togglePinConversation(id: string) {
    setConversations((current) =>
      current.map((conversation) =>
        conversation.id === id
          ? {
              ...conversation,
              pinned: !conversation.pinned,
            }
          : conversation
      )
    );
  }

  function archiveConversation(id: string) {
    setConversations((current) =>
      current.map((conversation) =>
        conversation.id === id
          ? {
              ...conversation,
              archived: !conversation.archived,
            }
          : conversation
      )
    );
  }

  return {
    conversations: filteredConversations,
    messages,
    activeConversationId,
    isNewChat,
    isTyping,
    search,
    setSearch,
    filter,
    setFilter,
    composerValue,
    setComposerValue,
    sendMessage,
    createConversation,
    selectConversation,
    renameConversation,
    deleteConversation,
    togglePinConversation,
    archiveConversation,
  };
}
