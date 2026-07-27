import type { AnalyticsWidgetFilter } from "./widget.types";

export interface SavedDashboard {
  id: string;

  name: string;

  description?: string;

  ownerId: string;

  widgets: string[];

  filters?: AnalyticsWidgetFilter[];

  isDefault: boolean;

  createdAt: string;

  updatedAt: string;
}
