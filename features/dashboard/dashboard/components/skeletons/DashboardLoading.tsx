import { DashboardStatCardSkeleton } from "./DashboardStatCardSkeleton";
import { CardSkeleton } from "./CardSkeleton";

export function DashboardLoading() {
  return (
    <div className="space-y-6">

      {/* KPI */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <DashboardStatCardSkeleton key={index} />
        ))}
      </div>

      {/* Quick Actions + Health + Workspace */}
      <div className="grid gap-6 xl:grid-cols-4">

        <div className="xl:col-span-2">
          <CardSkeleton rows={4} />
        </div>

        <CardSkeleton rows={5} />

        <CardSkeleton rows={6} />

      </div>

      {/* Activity + Analytics */}
      <div className="grid gap-6 xl:grid-cols-2">

        <CardSkeleton rows={7} />

        <CardSkeleton rows={7} />

      </div>

      {/* Conversations + Notifications */}
      <div className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <CardSkeleton rows={8} />
        </div>

        <CardSkeleton rows={5} />

      </div>

      {/* AI Insights */}
      <CardSkeleton rows={5} />

    </div>
  );
}
