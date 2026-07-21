"use client";

import { useEffect, useRef } from "react";

interface ChatComposerProps {
  value: string;
  onChange: (value: string) => void;
  onSend?: (message: string) => void;
  disabled?: boolean;
}

export function ChatComposer({
  value,
  onChange,
  onSend,
  disabled = false,
}: ChatComposerProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value]);

  function handleSend() {
    const message = value.trim();

    if (!message || disabled) return;

    onSend?.(message);
  }

  return (
    <div className="border-t bg-background p-4">
      <div className="flex items-end gap-3">
        <textarea
          ref={textareaRef}
          value={value}
          disabled={disabled}
          rows={1}
          placeholder="Message NovaCore AI..."
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              !e.shiftKey
            ) {
              e.preventDefault();
              handleSend();
            }
          }}
          className="max-h-40 min-h-12 flex-1 resize-none overflow-y-auto rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
        />

        <button
          type="button"
          disabled={disabled || !value.trim()}
          onClick={handleSend}
          className="rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
