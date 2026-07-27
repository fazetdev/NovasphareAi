import {
  AnalyticsDashboardContainer,
} from "../dashboard/AnalyticsDashboardContainer";

import {
  getDashboardByAudience,
} from "../../services/dashboard-data/dashboard-page.helpers";

export function CRMDashboard() {
  const dashboard =
    getDashboardByAudience("crm");

  if (!dashboard) {
    return (
      <div className="rounded-lg border p-4 text-sm text-muted-foreground">
        CRM dashboard unavailable.
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
