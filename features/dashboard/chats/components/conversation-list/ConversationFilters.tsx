"use client";

export type ConversationFilter =
  | "all"
  | "pinned"
  | "archived";

interface ConversationFiltersProps {
  value: ConversationFilter;
  onChange: (value: ConversationFilter) => void;
}

const filters: ConversationFilter[] = [
  "all",
  "pinned",
  "archived",
];

export function ConversationFilters({
  value,
  onChange,
}: ConversationFiltersProps) {
  return (
    <div className="flex gap-2 border-b px-4 py-3">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
          className={`rounded-md px-3 py-1.5 text-sm transition ${
            value === filter
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80"
          }`}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}
