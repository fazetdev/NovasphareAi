"use client";

import { ChatLayout } from "./components/layout/ChatLayout";
import { ConversationList } from "./components/conversation-list/ConversationList";
import { ConversationListHeader } from "./components/conversation-list/ConversationListHeader";
import { ChatWindow } from "./components/chat-window/ChatWindow";
import { ChatComposer } from "./components/composer/ChatComposer";
import { useChatUIState } from "./hooks/useChatUIState";

export default function Chats() {
  const {
    conversations,
    messages,
    activeConversationId,
    setActiveConversationId,
    sendMessage,
  } = useChatUIState();

  const activeConversation =
    conversations.find(
      (c) => c.id === activeConversationId
    );

  return (
    <ChatLayout
      sidebar={
        <div className="flex h-full flex-col">
          <ConversationListHeader />

          <ConversationList
            conversations={conversations}
            activeConversationId={activeConversationId}
            onSelect={setActiveConversationId}
          />
        </div>
      }
      chat={
        <ChatWindow
          title={activeConversation?.title ?? "Chat"}
          messages={messages}
          composer={
            <ChatComposer
              onSend={sendMessage}
            />
          }
        />
      }
    />
  );
}
