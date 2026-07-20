"use client";

export function LoadingChatState() {
  return (
    <div className="flex h-full flex-1 items-center justify-center">
      <p className="text-sm text-muted-foreground">
        Loading conversation...
      </p>
    </div>
  );
}
