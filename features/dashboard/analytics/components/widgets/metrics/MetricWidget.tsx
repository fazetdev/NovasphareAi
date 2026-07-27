import type {
  KPI,
} from "../../../types/analytics.types";

import {
  MetricCard,
} from "./MetricCard";

interface MetricWidgetProps {
  metric: KPI;
}

export function MetricWidget({
  metric,
}: MetricWidgetProps) {
  return (
    <MetricCard
      metric={metric}
    />
  );
}
