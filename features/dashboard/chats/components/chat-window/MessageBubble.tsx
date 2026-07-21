"use client";

import { ChatMessage } from "../../types/chat.types";

interface MessageBubbleProps {
  message: ChatMessage;
}

export function MessageBubble({
  message,
}: MessageBubbleProps) {
  const isUser = message.role === "user";
  const isSystem = message.role === "system";

  return (
    <div
      className={`flex items-end gap-2 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-semibold">
          AI
        </div>
      )}

      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-sm ${
          isUser
            ? "rounded-br-md bg-primary text-primary-foreground"
            : isSystem
              ? "border bg-background text-muted-foreground"
              : "rounded-bl-md bg-muted"
        }`}
      >
        <p className="whitespace-pre-wrap text-sm leading-relaxed">
          {message.content}
        </p>

        <div className="mt-2 flex items-center gap-2 text-xs opacity-70">
          <span>
            {message.timestamp}
          </span>

          {isUser && (
            <span>
              {message.status === "sent"
                ? "✓"
                : message.status === "sending"
                  ? "..."
                  : ""}
            </span>
          )}
        </div>
      </div>

      {isUser && (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
          You
        </div>
      )}
    </div>
  );
}
