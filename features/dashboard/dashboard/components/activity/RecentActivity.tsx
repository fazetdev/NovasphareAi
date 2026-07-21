import { EmptyState } from "@/components/ui/EmptyState";
import { ErrorState } from "@/components/ui/ErrorState";
import { ActivityItem } from "../../types/dashboard.types";

interface RecentActivityProps {
  activities: ActivityItem[];
  hasError?: boolean;
}

export function RecentActivity({
  activities,
  hasError = false,
}: RecentActivityProps) {

  if (hasError) {
    return (
      <ErrorState
        title="Unable to load activity"
        description="Please try again."
      />
    );
  }

  if (!activities.length) {
    return (
      <EmptyState
        title="No Activity"
        description="Recent platform activity will appear here."
      />
    );
  }

  return (
    <section className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold">
          Recent Activity
        </h2>

        <p className="text-sm text-muted-foreground">
          Latest platform events.
        </p>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="rounded-lg border p-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-medium">
                {activity.title}
              </h3>

              <span className="text-xs text-muted-foreground">
                {activity.timestamp}
              </span>
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              {activity.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
