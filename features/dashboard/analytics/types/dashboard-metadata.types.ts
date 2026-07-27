import type { DashboardAudience } from "./analytics.types";

export interface DashboardPermission {
  roles: string[];
  permissions: string[];
}

export interface DashboardMetadata {
  id: string;
  name: string;
  description?: string;

  audience: DashboardAudience;

  exportEnabled: boolean;

  scheduledReportsEnabled: boolean;

  realtimeEnabled: boolean;

  permissions: DashboardPermission;
}
