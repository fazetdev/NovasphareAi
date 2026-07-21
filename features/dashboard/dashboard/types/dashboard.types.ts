export interface DashboardStat {
  id: string;
  title: string;
  value: number;
  description: string;
  trend: "up" | "down";
  change: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  status: "success" | "info" | "warning" | "error";
}

export interface ConversationItem {
  id: string;
  agent: string;
  preview: string;
  user: string;
  timestamp: string;
}

export interface UsageAnalyticsPoint {
  label: string;
  value: number;
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface SystemHealth {
  id: string;
  service: string;
  status: "healthy" | "degraded" | "offline";
  lastChecked: string;
}
