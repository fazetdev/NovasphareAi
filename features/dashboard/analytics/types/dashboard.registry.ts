import type { ComponentType } from "react";

import {
  ExecutiveDashboard,
  OperationalDashboard,
  AIPerformanceDashboard,
  CRMDashboard,
  WorkflowDashboard,
  FinancialDashboard,
} from "../components/dashboards";

export interface AnalyticsDashboardRegistryItem {
  id: string;
  label: string;
  audience:
    | "executive"
    | "operational"
    | "ai"
    | "crm"
    | "workflow"
    | "financial";
  component: ComponentType;
}

export const analyticsDashboardRegistry:
  AnalyticsDashboardRegistryItem[] = [
    {
      id: "executive",
      label: "Executive",
      audience: "executive",
      component: ExecutiveDashboard,
    },
    {
      id: "operational",
      label: "Operational",
      audience: "operational",
      component: OperationalDashboard,
    },
    {
      id: "ai",
      label: "AI Performance",
      audience: "ai",
      component: AIPerformanceDashboard,
    },
    {
      id: "crm",
      label: "CRM",
      audience: "crm",
      component: CRMDashboard,
    },
    {
      id: "workflow",
      label: "Workflow",
      audience: "workflow",
      component: WorkflowDashboard,
    },
    {
      id: "financial",
      label: "Financial",
      audience: "financial",
      component: FinancialDashboard,
    },
  ];
