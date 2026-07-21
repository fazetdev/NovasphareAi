const actions = [
  {
    title: "New Conversation",
    description: "Start a new AI chat session.",
  },
  {
    title: "Upload Knowledge",
    description: "Add documents to the knowledge base.",
  },
  {
    title: "Create AI Agent",
    description: "Configure a new business assistant.",
  },
  {
    title: "View Analytics",
    description: "Review AI usage and performance.",
  },
];

export function QuickActions() {
  return (
    <section className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Quick Actions
        </h2>

        <p className="text-sm text-muted-foreground">
          Frequently used operations.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {actions.map((action) => (
          <button
            key={action.title}
            className="rounded-lg border p-5 text-left transition hover:bg-muted"
          >
            <h3 className="font-medium">
              {action.title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {action.description}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
