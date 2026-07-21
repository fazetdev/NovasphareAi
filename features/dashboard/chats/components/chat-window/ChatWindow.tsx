"use client";

import { ReactNode } from "react";

import { ChatMessage } from "../../types/chat.types";
import { EmptyChatState } from "../states/EmptyChatState";
import { ChatHeader } from "./ChatHeader";
import { MessageList } from "./MessageList";

interface ChatWindowProps {
  title: string;
  messages: ChatMessage[];
  composer: ReactNode;
  isTyping?: boolean;
  onSuggestionSelect?: (value: string) => void;
}

export function ChatWindow({
  title,
  messages,
  composer,
  isTyping = false,
  onSuggestionSelect,
}: ChatWindowProps) {
  const hasMessages = messages.length > 0;

  return (
    <div className="flex h-full flex-col">
      <ChatHeader title={title} />

      <div className="min-h-0 flex-1">
        {hasMessages ? (
          <>
            <MessageList messages={messages} />

            {isTyping && (
              <div className="px-6 pb-4">
                <div className="inline-flex items-center gap-2 rounded-xl bg-muted px-4 py-3 text-sm">
                  <span>NovaCore AI is typing</span>
                  <span className="animate-pulse">...</span>
                </div>
              </div>
            )}
          </>
        ) : (
          <EmptyChatState
            onSuggestionSelect={onSuggestionSelect}
          />
        )}
      </div>

      {composer}
    </div>
  );
}
