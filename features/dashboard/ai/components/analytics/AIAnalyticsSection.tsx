"use client"

import { useAIAnalytics } from "../../hooks"

import {
  AIAnalyticsSummaryCard,
  AICostMetricsCard,
  AIPerformanceMetricsCard,
  AIUsageMetricsCard,
  AIUsageTrendChart,
  AICostTrendChart,
  AIPerformanceTrendChart,
} from "."

export function AIAnalyticsSection() {
  const {
    analytics,
    isLoading,
    error,
  } = useAIAnalytics()

  if (isLoading) {
    return (
      <section className="rounded-lg border p-6">
        <p className="text-sm text-muted-foreground">
          Loading analytics...
        </p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="rounded-lg border p-6">
        <p className="text-sm text-destructive">
          {error}
        </p>
      </section>
    )
  }

  if (!analytics) {
    return (
      <section className="rounded-lg border p-6">
        <p className="text-sm text-muted-foreground">
          No analytics available.
        </p>
      </section>
    )
  }

  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold">
          Analytics
        </h2>

        <p className="text-sm text-muted-foreground">
          Monitor AI usage, cost, and performance.
        </p>
      </div>

      <AIAnalyticsSummaryCard
        analytics={analytics}
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <AIUsageMetricsCard
          usage={analytics.usage}
        />

        <AICostMetricsCard
          cost={analytics.cost}
        />
      </div>

      <AIPerformanceMetricsCard
        performance={analytics.performance}
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <AIUsageTrendChart />

        <AICostTrendChart />
      </div>

      <AIPerformanceTrendChart />
    </section>
  )
}
