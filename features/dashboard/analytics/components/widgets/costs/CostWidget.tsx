import type {
  AICostMetric,
} from "../../../types/cost-metrics.types";

import {
  mapCostToCard,
} from "./cost.adapter";

import {
  CostCard,
} from "./CostCard";

interface CostWidgetProps {
  metric: AICostMetric;
}

export function CostWidget({
  metric,
}: CostWidgetProps) {
  const data = mapCostToCard(metric);

  return (
    <CostCard
      title={data.title}
      amount={data.amount}
      currency={data.currency}
      description={data.description}
    />
  );
}
