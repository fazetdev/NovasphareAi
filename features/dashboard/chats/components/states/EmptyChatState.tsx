"use client";

const suggestions = [
  "Summarize today's sales performance",
  "Search the knowledge base",
  "Draft an email to a customer",
  "Create a project plan",
];

interface EmptyChatStateProps {
  onSuggestionSelect?: (value: string) => void;
}

export function EmptyChatState({
  onSuggestionSelect,
}: EmptyChatStateProps) {
  return (
    <div className="flex h-full items-center justify-center p-8">
      <div className="mx-auto w-full max-w-2xl text-center">
        <div className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Welcome to NovaCore AI
          </h2>

          <p className="mt-3 text-muted-foreground">
            Your enterprise AI workspace. Ask questions, analyze business
            knowledge, and collaborate with AI agents.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => onSuggestionSelect?.(suggestion)}
              className="rounded-xl border bg-card p-4 text-left transition hover:bg-muted"
            >
              <p className="text-sm font-medium">
                {suggestion}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
