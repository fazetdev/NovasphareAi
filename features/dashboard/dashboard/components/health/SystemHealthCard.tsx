import { SystemHealth } from "../../types/dashboard.types";

interface SystemHealthCardProps {
  items: SystemHealth[];
}

const statusMap = {
  healthy: {
    label: "Healthy",
    color: "bg-green-500",
  },
  degraded: {
    label: "Degraded",
    color: "bg-yellow-500",
  },
  offline: {
    label: "Offline",
    color: "bg-red-500",
  },
};

export function SystemHealthCard({
  items,
}: SystemHealthCardProps) {
  return (
    <section className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          System Health
        </h2>

        <p className="text-sm text-muted-foreground">
          Current platform services.
        </p>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span
                className={`h-2.5 w-2.5 rounded-full ${statusMap[item.status].color}`}
              />

              <span className="text-sm font-medium">
                {item.service}
              </span>
            </div>

            <span className="text-sm text-muted-foreground">
              {statusMap[item.status].label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
