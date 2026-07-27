export type AnalyticsResource =
  | "dashboard"
  | "metric"
  | "report"
  | "export";

export interface AnalyticsAccessRule {
  resource: AnalyticsResource;

  resourceId?: string;

  roles: string[];

  permissions: string[];

  visible: boolean;
}

export interface AnalyticsUserAccess {
  userId: string;

  roles: string[];

  rules: AnalyticsAccessRule[];
}
