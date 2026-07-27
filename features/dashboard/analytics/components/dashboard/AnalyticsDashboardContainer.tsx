import type {
  AnalyticsDashboard,
} from "../../types/analytics.types";

import {
  DashboardWidgetRenderer,
} from "./DashboardWidgetRenderer";

interface AnalyticsDashboardContainerProps {
  dashboard: AnalyticsDashboard;

  widgets: string[];
}

export function AnalyticsDashboardContainer({
  dashboard,
  widgets,
}: AnalyticsDashboardContainerProps) {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold">
          {dashboard.name}
        </h1>

        {dashboard.description && (
          <p className="mt-1 text-sm text-muted-foreground">
            {dashboard.description}
          </p>
        )}
      </header>

      <DashboardWidgetRenderer
        widgets={widgets}
      />
    </section>
  );
}
