export function WorkspaceOverview() {
  const items = [
    ["Organization", "Acme Construction"],
    ["Active Users", "24"],
    ["AI Agents", "6"],
    ["Knowledge Docs", "132"],
    ["Storage", "2.4 GB / 10 GB"],
    ["Plan", "Enterprise"],
  ];

  return (
    <section className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Workspace Overview
        </h2>

        <p className="text-sm text-muted-foreground">
          Current organization summary.
        </p>
      </div>

      <div className="space-y-4">
        {items.map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between border-b pb-3 last:border-b-0"
          >
            <span className="text-sm text-muted-foreground">
              {label}
            </span>

            <span className="font-medium">
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
