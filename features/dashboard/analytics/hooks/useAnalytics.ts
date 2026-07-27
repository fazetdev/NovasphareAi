"use client";

import { useDashboard } from "./useDashboard";
import { useKPIs } from "./useKPIs";
import { useReports } from "./useReports";

export function useAnalytics() {
  const dashboard = useDashboard();
  const kpis = useKPIs();
  const reports = useReports();

  return {
    dashboard,
    kpis,
    reports,
    loading:
      dashboard.loading ||
      kpis.loading ||
      reports.loading,
    error:
      dashboard.error ||
      kpis.error ||
      reports.error,
    refresh: async () => {
      await Promise.all([
        dashboard.refresh(),
        kpis.refresh(),
        reports.refresh(),
      ]);
    },
  };
}
