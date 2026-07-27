"use client";

import { useState } from "react";

import { useAnalytics } from "../../hooks";

import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";

import { KPICard } from "../kpi/KPICard";
import { AnalyticsFilters } from "../filters/AnalyticsFilters";
import { AnalyticsChart } from "../charts/AnalyticsChart";

import { AnalyticsLoading } from "../states/AnalyticsLoading";
import { AnalyticsEmpty } from "../states/AnalyticsEmpty";
import { AnalyticsError } from "../states/AnalyticsError";

import {
  DashboardSelector,
  DashboardRenderer,
} from "../dashboards";

import { analyticsChartData } from "../../services/mock/chart.mock";

export function AnalyticsContent() {
  const {
    kpis,
    loading,
    error,
  } = useAnalytics();

  const [dashboardId, setDashboardId] =
    useState("executive");

  const hasKPIs =
    kpis.data.some(
      (group) => group.items.length > 0,
    );

  return (
    <PageContainer>
      <PageHeader
        title="Analytics"
        description="Business intelligence and decision support for NovaCore AI."
      />

      <AnalyticsFilters />

      <section className="mt-6">
        <DashboardSelector
          value={dashboardId}
          onChange={setDashboardId}
        />
      </section>

      <div className="mt-6">
        {error && (
          <AnalyticsError message={error} />
        )}

        {loading && (
          <AnalyticsLoading />
        )}

        {!loading && !error && !hasKPIs && (
          <AnalyticsEmpty />
        )}

        {!loading && !error && hasKPIs && (
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {kpis.data.flatMap((group) =>
              group.items.map((kpi) => (
                <KPICard
                  key={kpi.id}
                  kpi={kpi}
                />
              )),
            )}
          </section>
        )}
      </div>

      <section className="mt-6">
        <DashboardRenderer
          dashboardId={dashboardId}
        />
      </section>

      <section className="mt-6">
        <AnalyticsChart
          title="AI Operations Trend"
          description="Historical analytics activity."
          data={analyticsChartData}
          type="line"
        />
      </section>
    </PageContainer>
  );
}
