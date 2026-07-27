import {
  AnalyticsDashboardContainer,
} from "../dashboard/AnalyticsDashboardContainer";

import {
  getDashboardByAudience,
} from "../../services/dashboard-data/dashboard-page.helpers";

export function ExecutiveDashboard() {
  const dashboard =
    getDashboardByAudience("executive");

  if (!dashboard) {
    return (
      <div className="rounded-lg border p-4 text-sm text-muted-foreground">
        Executive dashboard unavailable.
      </div>
    );
  }

  return (
    <AnalyticsDashboardContainer
      dashboard={dashboard.dashboard}
      widgets={dashboard.widgets}
    />
  );
}
