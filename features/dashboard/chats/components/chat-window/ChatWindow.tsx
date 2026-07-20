"use client";

import { ChatMessage } from "../../types/chat.types";
import { ChatHeader } from "./ChatHeader";
import { MessageList } from "./MessageList";

interface ChatWindowProps {
  title: string;
  messages: ChatMessage[];
  composer: React.ReactNode;
}

export function ChatWindow({
  title,
  messages,
  composer,
}: ChatWindowProps) {
  return (
    <div className="flex h-full flex-col">
      <ChatHeader title={title} />
      <MessageList messages={messages} />
      {composer}
    </div>
  );
}
