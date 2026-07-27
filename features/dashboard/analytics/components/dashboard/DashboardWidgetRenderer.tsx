import {
  CostWidget,
  AIPerformanceWidget,
  AnomalyAlertPanel,
  ForecastWidget,
  BenchmarkWidget,
} from "../widgets";

import {
  dashboardCostMock,
  dashboardAIPerformanceMock,
  dashboardAnomaliesMock,
  dashboardForecastMock,
  dashboardBenchmarkMock,
} from "../../services/dashboard-data/dashboard-widgets.mock";

interface DashboardWidgetRendererProps {
  widgets: string[];
}

export function DashboardWidgetRenderer({
  widgets,
}: DashboardWidgetRendererProps) {
  return (
    <div className="grid gap-6">
      {widgets.map((widget) => {
        switch (widget) {
          case "costs":
            return (
              <CostWidget
                key={widget}
                metric={dashboardCostMock}
              />
            );

          case "ai-performance":
            return (
              <AIPerformanceWidget
                key={widget}
                snapshot={dashboardAIPerformanceMock}
              />
            );

          case "alerts":
            return (
              <AnomalyAlertPanel
                key={widget}
                anomalies={dashboardAnomaliesMock}
              />
            );

          case "forecast":
            return (
              <ForecastWidget
                key={widget}
                forecast={dashboardForecastMock}
              />
            );

          case "benchmark":
            return (
              <BenchmarkWidget
                key={widget}
                benchmark={dashboardBenchmarkMock}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
