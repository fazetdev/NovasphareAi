import type { KPIGroup } from "../../types/analytics.types";

export const kpiGroups: KPIGroup[] = [
  {
    id: "executive",
    title: "Executive KPIs",
    description: "Organization-wide business performance.",
    category: "executive",
    items: [],
  },
  {
    id: "ai",
    title: "AI Performance",
    description: "AI model and agent performance.",
    category: "ai",
    items: [],
  },
  {
    id: "crm",
    title: "CRM Analytics",
    description: "Customer and contact insights.",
    category: "crm",
    items: [],
  },
  {
    id: "workflow",
    title: "Workflow Analytics",
    description: "Automation execution metrics.",
    category: "workflow",
    items: [],
  },
  {
    id: "financial",
    title: "Financial Analytics",
    description: "Cost, token usage, and ROI.",
    category: "financial",
    items: [],
  },
];
