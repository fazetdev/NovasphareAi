import type {
  PublishedMetric,
} from "../../types/metric-publisher.types";

export const enterpriseMetrics: PublishedMetric[] = [
  {
    definition: {
      id: "chat.total-conversations",
      name: "Total Conversations",
      description: "Total AI conversations processed.",
      category: "conversation",
      valueType: "number",
      aggregation: "count",
      dimensions: [
        {
          id: "channel",
          label: "Channel",
          field: "channel",
        },
      ],
      filters: [],
      drillDown: "chats",
    },
    value: {
      metricId: "chat.total-conversations",
      value: 2480,
      previousValue: 2210,
      trend: "up",
      status: "healthy",
      updatedAt: new Date().toISOString(),
    },
    timestamp: new Date().toISOString(),
    workspaceId: "workspace-demo",
  },

  {
    definition: {
      id: "ai.response-latency",
      name: "Response Latency",
      description: "Average AI response time.",
      category: "ai",
      valueType: "duration",
      aggregation: "average",
      dimensions: [],
      filters: [],
      drillDown: "ai",
    },
    value: {
      metricId: "ai.response-latency",
      value: 820,
      previousValue: 950,
      trend: "down",
      status: "healthy",
      updatedAt: new Date().toISOString(),
    },
    timestamp: new Date().toISOString(),
    workspaceId: "workspace-demo",
  },

  {
    definition: {
      id: "automation.success-rate",
      name: "Workflow Success Rate",
      description: "Automation workflow completion rate.",
      category: "workflow",
      valueType: "percentage",
      aggregation: "rate",
      dimensions: [],
      filters: [],
      drillDown: "automation",
    },
    value: {
      metricId: "automation.success-rate",
      value: 96,
      previousValue: 93,
      trend: "up",
      status: "healthy",
      updatedAt: new Date().toISOString(),
    },
    timestamp: new Date().toISOString(),
    workspaceId: "workspace-demo",
  },
];
