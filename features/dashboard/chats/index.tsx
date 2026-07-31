"use client";

import { ChatLayout } from "./components/layout/ChatLayout";
import { ChatWindow } from "./components/chat-window/ChatWindow";
import { ChatComposer } from "./components/composer/ChatComposer";
import { ConversationFilters } from "./components/conversation-list/ConversationFilters";
import { ConversationList } from "./components/conversation-list/ConversationList";
import { ConversationListHeader } from "./components/conversation-list/ConversationListHeader";
import { ConversationSearch } from "./components/conversation-list/ConversationSearch";
import { useChatUIState } from "./hooks/useChatUIState";

import { useTranslations } from "@/lib/i18n/hooks";

export default function Chats() {
  const {
    conversations,
    messages,
    activeConversationId,
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
    isNewChat,
    isTyping,
  } = useChatUIState();

  const t = useTranslations();

  const activeConversation = conversations.find(
    (conversation) => conversation.id === activeConversationId
  );

  return (
    <ChatLayout
      sidebar={(closeSidebar) => (
        <div className="flex h-full flex-col">
          <ConversationListHeader
            onNewChat={() => {
              createConversation();
              closeSidebar();
            }}
            actions={
              <ConversationSearch
                value={search}
                onChange={setSearch}
              />
            }
          />

          <ConversationFilters
            value={filter}
            onChange={setFilter}
          />

          <ConversationList
            conversations={conversations}
            activeConversationId={activeConversationId}
            onSelect={(id) => {
              selectConversation(id);
              closeSidebar();
            }}
            onRename={renameConversation}
            onDelete={deleteConversation}
            onPin={togglePinConversation}
            onArchive={archiveConversation}
          />
        </div>
      )}
      chat={
        <ChatWindow
          title={
            isNewChat
              ? t.chat.newChat
              : activeConversation?.title ?? t.chat.title
          }
          messages={messages}
          isTyping={isTyping}
          onSuggestionSelect={setComposerValue}
          composer={
            <ChatComposer
              value={composerValue}
              onChange={setComposerValue}
              onSend={sendMessage}
            />
          }
        />
      }
    />
  );
}
