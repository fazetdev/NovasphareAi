export interface AIUsageMetrics {
  totalRequests: number
  successfulRequests: number
  failedRequests: number
  totalTokens: number
}

export interface AICostMetrics {
  totalCost: number
  averageCostPerRequest: number
  currency: string
}

export interface AIPerformanceMetrics {
  averageLatencyMs: number
  p95LatencyMs: number
  uptimePercentage: number
}

export interface AIAnalytics {
  usage: AIUsageMetrics
  cost: AICostMetrics
  performance: AIPerformanceMetrics

  generatedAt: string
}
