"use client";

interface ErrorChatStateProps {
  message?: string;
}

export function ErrorChatState({
  message = "Something went wrong.",
}: ErrorChatStateProps) {
  return (
    <div className="flex h-full flex-1 items-center justify-center">
      <div className="text-center">
        <h3 className="text-lg font-semibold">
          Unable to load chat
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          {message}
        </p>
      </div>
    </div>
  );
}
