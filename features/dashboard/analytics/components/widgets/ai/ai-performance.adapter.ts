import type {
  AIPerformanceSnapshot,
} from "../../../types/ai-performance.types";

export interface AIPerformanceCardData {
  title: string;

  value: number;

  unit: string;

  description?: string;
}

export function mapAIPerformanceToCards(
  snapshot: AIPerformanceSnapshot,
): AIPerformanceCardData[] {
  return [
    {
      title: "Average Latency",
      value: snapshot.latency.averageLatencyMs,
      unit: "ms",
      description:
        "Average AI response latency.",
    },

    {
      title: "P95 Latency",
      value: snapshot.latency.p95LatencyMs,
      unit: "ms",
      description:
        "95th percentile response latency.",
    },

    {
      title: "Completion Rate",
      value:
        snapshot.quality.completionRate ?? 0,
      unit: "%",
      description:
        "Successful AI task completion rate.",
    },
  ];
}
