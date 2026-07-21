const insights = [
  {
    id: "1",
    title: "Conversation Growth",
    description: "Conversation volume increased by 12% this week.",
  },
  {
    id: "2",
    title: "Knowledge Base",
    description: "18 new documents were indexed successfully.",
  },
  {
    id: "3",
    title: "Top AI Agent",
    description: "Sales Assistant handled 42% of all requests.",
  },
  {
    id: "4",
    title: "Recommendation",
    description: "Consider creating another Sales Assistant to distribute workload.",
  },
];

export function AIInsightsCard() {
  return (
    <section className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          AI Insights
        </h2>

        <p className="text-sm text-muted-foreground">
          Intelligent summaries based on platform activity.
        </p>
      </div>

      <div className="space-y-5">
        {insights.map((item) => (
          <div
            key={item.id}
            className="border-b pb-4 last:border-b-0"
          >
            <h3 className="font-medium">
              {item.title}
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
