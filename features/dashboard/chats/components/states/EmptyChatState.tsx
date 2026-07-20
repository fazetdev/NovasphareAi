"use client";

export function EmptyChatState() {
  return (
    <div className="flex h-full flex-1 items-center justify-center">
      <div className="text-center">
        <h3 className="text-lg font-semibold">
          No conversation selected
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Select a conversation or start a new chat.
        </p>
      </div>
    </div>
  );
}
