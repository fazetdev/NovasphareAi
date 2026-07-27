import {
  AnalyticsDashboardContainer,
} from "../dashboard/AnalyticsDashboardContainer";

import {
  getDashboardByAudience,
} from "../../services/dashboard-data/dashboard-page.helpers";

export function FinancialDashboard() {
  const dashboard =
    getDashboardByAudience("financial");

  if (!dashboard) {
    return (
      <div className="rounded-lg border p-4 text-sm text-muted-foreground">
        Financial dashboard unavailable.
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
