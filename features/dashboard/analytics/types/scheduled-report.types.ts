export type ReportScheduleFrequency =
  | "daily"
  | "weekly"
  | "monthly";

export type ReportDeliveryChannel =
  | "email"
  | "dashboard"
  | "webhook";

export interface AnalyticsScheduledReport {
  id: string;

  reportId: string;

  name: string;

  frequency: ReportScheduleFrequency;

  deliveryChannels: ReportDeliveryChannel[];

  recipients: string[];

  enabled: boolean;

  nextRunAt: string;

  createdAt: string;
}
