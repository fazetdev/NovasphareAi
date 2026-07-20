"use client";

import { useState } from "react";

interface ChatComposerProps {
  onSend?: (message: string) => void;
  disabled?: boolean;
}

export function ChatComposer({
  onSend,
  disabled = false,
}: ChatComposerProps) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    const message = value.trim();

    if (!message || disabled) return;

    onSend?.(message);
    setValue("");
  };

  return (
    <div className="border-t p-4">
      <div className="flex gap-3">
        <textarea
          rows={2}
          value={value}
          disabled={disabled}
          placeholder="Message NovaCore AI..."
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          className="flex-1 resize-none rounded-lg border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
        />

        <button
          type="button"
          disabled={disabled || !value.trim()}
          onClick={handleSend}
          className="rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
