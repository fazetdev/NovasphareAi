import type {
  AICostMetric,
} from "../../../types/cost-metrics.types";

export interface CostCardData {
  title: string;

  amount: number;

  currency: string;

  description?: string;
}

export function mapCostToCard(
  metric: AICostMetric,
): CostCardData {
  return {
    title: `${metric.provider} ${metric.model}`,

    amount: metric.totalCost,

    currency: metric.currency,

    description:
      "AI model operational cost.",
  };
}
