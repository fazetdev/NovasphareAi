import type {
  MetricDefinition,
  MetricValue,
} from "../../../types/analytics.types";

export interface MetricCardData {
  title: string;

  description?: string;

  value: MetricValue;

  unit?: string;
}

export function mapMetricToCard(
  definition: MetricDefinition,
  value: MetricValue,
): MetricCardData {
  return {
    title: definition.name,

    description: definition.description,

    value,

    unit:
      definition.valueType === "percentage"
        ? "%"
        : undefined,
  };
}
