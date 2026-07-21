"use client";

import { EmptyState } from "@/components/ui/EmptyState";
import { UsageAnalyticsPoint } from "../../types/dashboard.types";
import { UsageChart } from "./UsageChart";

interface UsageAnalyticsProps {
  data: UsageAnalyticsPoint[];
}

export function UsageAnalytics({
  data,
}: UsageAnalyticsProps) {
  const analytics = data ?? [];

  if (!analytics.length) {
    return (
      <EmptyState
        title="No Analytics"
        description="Analytics will appear after AI requests are processed."
      />
    );
  }

  const totalRequests = analytics.reduce(
    (sum, item) => sum + item.value,
    0
  );

  const peakDay = analytics.reduce((max, item) =>
    item.value > max.value ? item : max
  );

  return (
    <section className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">
            AI Usage Analytics
          </h2>

          <p className="text-sm text-muted-foreground">
            AI request activity over the last seven days.
          </p>
        </div>

        <div className="text-right">
          <p className="text-2xl font-bold">
            {totalRequests}
          </p>

          <p className="text-xs text-muted-foreground">
            Total Requests
          </p>
        </div>
      </div>

      <UsageChart data={analytics} />

      <div className="mt-6 rounded-lg border bg-muted/40 p-4">
        <p className="font-medium">
          Highest Usage Day
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          {peakDay.label} • {peakDay.value} requests
        </p>
      </div>
    </section>
  );
}
