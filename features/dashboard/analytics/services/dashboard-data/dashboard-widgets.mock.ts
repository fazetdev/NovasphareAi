import type {
  AICostMetric,
} from "../../types/cost-metrics.types";

import type {
  AIPerformanceSnapshot,
} from "../../types/ai-performance.types";

import type {
  AnalyticsAnomaly,
  AnalyticsForecast,
} from "../../types/intelligence.types";

import type {
  AnalyticsBenchmark,
} from "../../types/benchmark.types";


export const dashboardCostMock: AICostMetric = {
  metricId: "ai-cost-monthly",
  workspaceId: "workspace-demo",
  model: "gpt-model",
  provider: "OpenAI",
  inputCost: 120,
  outputCost: 80,
  totalCost: 200,
  currency: "USD",
  timestamp: new Date().toISOString(),
};


export const dashboardAIPerformanceMock: AIPerformanceSnapshot = {
  latency: {
    metricId: "ai-latency",
    workspaceId: "workspace-demo",
    model: "gpt-model",
    averageLatencyMs: 850,
    p95LatencyMs: 1400,
    timestamp: new Date().toISOString(),
  },

  quality: {
    metricId: "ai-quality",
    workspaceId: "workspace-demo",
    accuracyScore: 94,
    satisfactionScore: 91,
    completionRate: 96,
    fallbackRate: 4,
    timestamp: new Date().toISOString(),
  },
};


export const dashboardAnomaliesMock: AnalyticsAnomaly[] = [];


export const dashboardForecastMock: AnalyticsForecast = {
  id: "forecast-ai-growth",
  metricId: "chat.total-conversations",
  horizon: "30d",

  points: [
    {
      timestamp: new Date().toISOString(),
      predictedValue: 3000,
      confidence: 92,
    },
  ],

  generatedAt: new Date().toISOString(),
};


export const dashboardBenchmarkMock: AnalyticsBenchmark = {
  id: "response-time-benchmark",
  metricId: "ai.response-latency",
  name: "AI Response Speed",
  targetValue: 1000,
  currentValue: 850,
  variance: 150,
  unit: "ms",
  period: "monthly",
  status: "above",
};
