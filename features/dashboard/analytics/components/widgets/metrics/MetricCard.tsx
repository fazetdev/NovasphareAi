import type {
  KPI,
} from "../../../types/analytics.types";

import {
  DrilldownButton,
} from "../../drilldown";

interface MetricCardProps {
  metric: KPI;
}

export function MetricCard({
  metric,
}: MetricCardProps) {
  return (
    <div className="rounded-lg border p-4 space-y-4">
      <div>
        <h3 className="text-sm font-medium">
          {metric.title}
        </h3>

        <p className="mt-2 text-2xl font-semibold">
          {metric.value.value}
          {metric.unit && ` ${metric.unit}`}
        </p>

        {metric.description && (
          <p className="mt-1 text-sm text-muted-foreground">
            {metric.description}
          </p>
        )}
      </div>

      <DrilldownButton
        target={{
          module: "dashboard",
          resourceId: metric.id,
        }}
        label="View Metric"
      />
    </div>
  );
}
