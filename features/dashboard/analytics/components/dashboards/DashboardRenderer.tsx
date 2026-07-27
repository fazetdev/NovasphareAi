"use client";

import {
  analyticsDashboardRegistry,
} from "../../types/dashboard.registry";

type DashboardRendererProps = {
  dashboardId: string;
};

export function DashboardRenderer({
  dashboardId,
}: DashboardRendererProps) {
  const dashboard =
    analyticsDashboardRegistry.find(
      (item) => item.id === dashboardId,
    );

  if (!dashboard) {
    return (
      <div className="rounded-lg border border-dashed p-6 text-sm text-muted-foreground">
        Dashboard not found.
      </div>
    );
  }

  const Component = dashboard.component;

  return <Component />;
}
