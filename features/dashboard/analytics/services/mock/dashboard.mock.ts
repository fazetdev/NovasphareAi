import type { AnalyticsDashboard } from "../../types/analytics.types";

export const analyticsDashboards: AnalyticsDashboard[] = [
  {
    id: "executive",
    name: "Executive Dashboard",
    description: "Business intelligence overview.",
    audience: "executive",
    widgets: [],
    filters: [],
    defaultDateRange: {
      from: "2026-01-01",
      to: "2026-12-31",
    },
    isDefault: true,
  },
  {
    id: "operational",
    name: "Operational Dashboard",
    description: "Daily operations and monitoring.",
    audience: "operational",
    widgets: [],
    filters: [],
    defaultDateRange: {
      from: "2026-01-01",
      to: "2026-12-31",
    },
    isDefault: false,
  },
  {
    id: "ai",
    name: "AI Performance Dashboard",
    description: "Models, agents and AI usage.",
    audience: "ai",
    widgets: [],
    filters: [],
    defaultDateRange: {
      from: "2026-01-01",
      to: "2026-12-31",
    },
    isDefault: false,
  },
  {
    id: "crm",
    name: "CRM Dashboard",
    description: "Customer and contact analytics.",
    audience: "crm",
    widgets: [],
    filters: [],
    defaultDateRange: {
      from: "2026-01-01",
      to: "2026-12-31",
    },
    isDefault: false,
  },
  {
    id: "workflow",
    name: "Workflow Dashboard",
    description: "Automation performance insights.",
    audience: "workflow",
    widgets: [],
    filters: [],
    defaultDateRange: {
      from: "2026-01-01",
      to: "2026-12-31",
    },
    isDefault: false,
  },
  {
    id: "financial",
    name: "Financial Dashboard",
    description: "Cost, token and ROI analytics.",
    audience: "financial",
    widgets: [],
    filters: [],
    defaultDateRange: {
      from: "2026-01-01",
      to: "2026-12-31",
    },
    isDefault: false,
  },
];
