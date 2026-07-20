"use client";

import { useMemo, useState } from "react";
import {
  getConversations,
  getMessages,
} from "../services/chat.mock";

export function useChatUIState() {
  const conversations = useMemo(() => getConversations(), []);

  const [activeConversationId, setActiveConversationId] = useState(
    conversations[0]?.id ?? ""
  );

  const messages = useMemo(
    () => getMessages(activeConversationId),
    [activeConversationId]
  );

  return {
    conversations,
    messages,
    activeConversationId,
    setActiveConversationId,
  };
}
