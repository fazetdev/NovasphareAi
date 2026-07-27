import type {
  AnalyticsDashboard,
} from "../../types/analytics.types";

export interface DashboardComposition {
  dashboard: AnalyticsDashboard;

  widgets: string[];
}

export function composeDashboard(
  dashboard: AnalyticsDashboard,
  widgets: string[],
): DashboardComposition {
  return {
    dashboard,
    widgets,
  };
}
