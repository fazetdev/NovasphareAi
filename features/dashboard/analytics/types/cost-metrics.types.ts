export interface TokenUsageMetric {
  metricId: string;

  workspaceId: string;

  inputTokens: number;

  outputTokens: number;

  totalTokens: number;

  model: string;

  timestamp: string;
}

export interface AICostMetric {
  metricId: string;

  workspaceId: string;

  model: string;

  provider: string;

  inputCost: number;

  outputCost: number;

  totalCost: number;

  currency: string;

  timestamp: string;
}

export interface CostBreakdown {
  category:
    | "model"
    | "agent"
    | "workflow"
    | "workspace";

  name: string;

  amount: number;

  currency: string;
}
