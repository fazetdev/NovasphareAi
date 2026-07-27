"use client";

import { AnalyticsChart } from "../charts/AnalyticsChart";

import { analyticsChartData } from "../../services/mock/chart.mock";

export function OperationalDashboard() {
  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-xl font-semibold">
          Operational Dashboard
        </h2>

        <p className="text-sm text-muted-foreground">
          Monitor daily operations, activity volume, and system performance.
        </p>
      </header>

      <AnalyticsChart
        title="Operational Activity Trend"
        description="Daily operational metrics over time."
        data={analyticsChartData}
        type="line"
      />
    </section>
  );
}
