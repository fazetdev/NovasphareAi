"use client";

import { AnalyticsChart } from "../charts/AnalyticsChart";

import { analyticsChartData } from "../../services/mock/chart.mock";

export function AIPerformanceDashboard() {
  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-xl font-semibold">
          AI Performance Dashboard
        </h2>

        <p className="text-sm text-muted-foreground">
          Monitor AI agents, models, usage, latency, and response quality.
        </p>
      </header>

      <AnalyticsChart
        title="AI Performance Trend"
        description="AI activity and performance history."
        data={analyticsChartData}
        type="line"
      />
    </section>
  );
}
