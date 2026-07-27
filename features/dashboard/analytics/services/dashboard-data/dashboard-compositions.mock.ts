import type {
  DashboardComposition,
} from "./dashboard-composer";

import type {
  AnalyticsDashboard,
} from "../../types/analytics.types";

const executiveDashboard: AnalyticsDashboard = {
  id: "executive-dashboard",
  name: "Executive Dashboard",
  description: "High-level business performance overview.",
  audience: "executive",
  widgets: [],
  filters: [],
  defaultDateRange: {
    from: "2026-01-01",
    to: "2026-12-31",
  },
  isDefault: true,
};

const aiDashboard: AnalyticsDashboard = {
  id: "ai-performance-dashboard",
  name: "AI Performance Dashboard",
  description: "AI operations, quality and cost monitoring.",
  audience: "ai",
  widgets: [],
  filters: [],
  defaultDateRange: {
    from: "2026-01-01",
    to: "2026-12-31",
  },
  isDefault: false,
};

const crmDashboard: AnalyticsDashboard = {
  id: "crm-dashboard",
  name: "CRM Dashboard",
  description: "Customer relationship analytics and engagement insights.",
  audience: "crm",
  widgets: [],
  filters: [],
  defaultDateRange: {
    from: "2026-01-01",
    to: "2026-12-31",
  },
  isDefault: false,
};

const workflowDashboard: AnalyticsDashboard = {
  id: "workflow-dashboard",
  name: "Workflow Dashboard",
  description: "Workflow execution and automation analytics.",
  audience: "workflow",
  widgets: [],
  filters: [],
  defaultDateRange: {
    from: "2026-01-01",
    to: "2026-12-31",
  },
  isDefault: false,
};

const financialDashboard: AnalyticsDashboard = {
  id: "financial-dashboard",
  name: "Financial Dashboard",
  description: "Revenue, costs and financial performance analytics.",
  audience: "financial",
  widgets: [],
  filters: [],
  defaultDateRange: {
    from: "2026-01-01",
    to: "2026-12-31",
  },
  isDefault: false,
};

export const dashboardCompositions: DashboardComposition[] = [
  {
    dashboard: executiveDashboard,
    widgets: [
      "metrics",
      "benchmark",
      "forecast",
    ],
  },
  {
    dashboard: aiDashboard,
    widgets: [
      "ai-performance",
      "costs",
      "alerts",
      "forecast",
    ],
  },
  {
    dashboard: crmDashboard,
    widgets: [
      "metrics",
      "benchmark",
      "reports",
    ],
  },
  {
    dashboard: workflowDashboard,
    widgets: [
      "metrics",
      "alerts",
      "benchmark",
    ],
  },
  {
    dashboard: financialDashboard,
    widgets: [
      "costs",
      "benchmark",
      "forecast",
      "reports",
    ],
  },
];
