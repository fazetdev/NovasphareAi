"use client";

import {
  useDashboardSwitcher,
} from "../../hooks/useDashboardSwitcher";

import {
  useDashboardFilters,
} from "../../hooks/useDashboardFilters";

import {
  DashboardSwitcher,
} from "../switcher";

import {
  DashboardFilterBar,
} from "../filters/DashboardFilterBar";

import {
  ExecutiveDashboard,
  AIOperationsDashboard,
  CRMDashboard,
  WorkflowDashboard,
  FinancialDashboard,
} from "../dashboards";

export function AnalyticsDashboardEntry() {
  const {
    dashboard,
    setDashboard,
  } = useDashboardSwitcher();

  const {
    filters,
    setDateRange,
  } = useDashboardFilters();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <DashboardSwitcher
          value={dashboard}
          onChange={setDashboard}
        />

        <DashboardFilterBar
          dateRange={filters.dateRange}
          onDateRangeChange={setDateRange}
        />
      </div>

      {dashboard === "executive" && (
        <ExecutiveDashboard />
      )}

      {dashboard === "ai" && (
        <AIOperationsDashboard />
      )}

      {dashboard === "crm" && (
        <CRMDashboard />
      )}

      {dashboard === "workflow" && (
        <WorkflowDashboard />
      )}

      {dashboard === "financial" && (
        <FinancialDashboard />
      )}
    </div>
  );
}
