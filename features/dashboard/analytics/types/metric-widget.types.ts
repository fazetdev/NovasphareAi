import type { AnalyticsWidget } from "./widget.types";

export interface AnalyticsMetricDefinition {
  id: string;
  name: string;
  description?: string;

  sourceModule:
    | "chat"
    | "contacts"
    | "agents"
    | "knowledge-base"
    | "automation"
    | "models";

  valueType:
    | "number"
    | "percentage"
    | "duration"
    | "currency"
    | "tokens";

  unit?: string;

  dimensions?: string[];

  supportedAggregations?: (
    | "sum"
    | "average"
    | "count"
    | "min"
    | "max"
  )[];

  widgets?: AnalyticsWidget[];
}
