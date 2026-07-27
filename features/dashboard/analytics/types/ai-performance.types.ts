export interface AILatencyMetric {
  metricId: string;

  workspaceId: string;

  agentId?: string;

  model: string;

  averageLatencyMs: number;

  p95LatencyMs: number;

  timestamp: string;
}

export interface AIQualityMetric {
  metricId: string;

  workspaceId: string;

  agentId?: string;

  accuracyScore?: number;

  satisfactionScore?: number;

  completionRate?: number;

  fallbackRate?: number;

  timestamp: string;
}

export interface AIPerformanceSnapshot {
  latency: AILatencyMetric;

  quality: AIQualityMetric;
}
