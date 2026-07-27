export type MetricCategory =
  | "executive"
  | "operational"
  | "ai"
  | "conversation"
  | "knowledge"
  | "agent"
  | "model"
  | "crm"
  | "workflow"
  | "financial";

export type MetricValueType =
  | "number"
  | "percentage"
  | "currency"
  | "duration"
  | "tokens";

export type MetricTrend =
  | "up"
  | "down"
  | "stable";

export type MetricStatus =
  | "healthy"
  | "warning"
  | "critical";

export type MetricAggregation =
  | "sum"
  | "average"
  | "count"
  | "min"
  | "max"
  | "rate";

export type DrillDownTarget =
  | "dashboard"
  | "chats"
  | "contacts"
  | "knowledge-base"
  | "ai"
  | "automation"
  | "settings";

export interface AnalyticsDateRange {
  from: string;
  to: string;
}

export interface AnalyticsPagination {
  page: number;
  pageSize: number;
  total: number;
}

export interface AnalyticsMetadata {
  generatedAt: string;
  lastUpdated: string;
  cached: boolean;
}

export interface MetricDimension {
  id: string;
  label: string;
  field: string;
}

export interface MetricFilter {
  id: string;
  label: string;
  field: string;
  value: string | number | boolean | string[];
}

export interface MetricDefinition {
  id: string;
  name: string;
  description: string;
  category: MetricCategory;
  valueType: MetricValueType;
  aggregation: MetricAggregation;
  dimensions: MetricDimension[];
  filters: MetricFilter[];
  drillDown: DrillDownTarget;
}

export interface MetricValue {
  metricId: string;
  value: number;
  previousValue?: number;
  trend: MetricTrend;
  status: MetricStatus;
  updatedAt: string;
}


export interface KPI {
  id: string;
  title: string;
  description?: string;
  metric: MetricDefinition;
  value: MetricValue;
  target?: number;
  benchmark?: number;
  unit?: string;
  icon?: string;
  featured?: boolean;
}

export interface KPIGroup {
  id: string;
  title: string;
  description?: string;
  category: MetricCategory;
  items: KPI[];
}


export type FilterOperator =
  | "equals"
  | "notEquals"
  | "contains"
  | "startsWith"
  | "endsWith"
  | "greaterThan"
  | "lessThan"
  | "between"
  | "in";

export interface AnalyticsFilter {
  id: string;
  field: string;
  label: string;
  operator: FilterOperator;
  value: string | number | boolean | string[];
}

export interface AnalyticsGroupBy {
  id: string;
  field: string;
  label: string;
}

export interface AnalyticsSort {
  field: string;
  direction: "asc" | "desc";
}


export type ReportType =
  | "executive"
  | "operational"
  | "ai"
  | "crm"
  | "workflow"
  | "financial"
  | "custom";

export type ReportFormat =
  | "csv"
  | "xlsx"
  | "pdf"
  | "json";

export interface SavedReport {
  id: string;
  name: string;
  description?: string;
  type: ReportType;
  dashboards: string[];
  filters: AnalyticsFilter[];
  createdAt: string;
  updatedAt: string;
}

export interface ScheduledReport {
  id: string;
  reportId: string;
  frequency: "daily" | "weekly" | "monthly";
  enabled: boolean;
  nextRun: string;
  formats: ReportFormat[];
  recipients: string[];
}

export interface ReportExport {
  format: ReportFormat;
  generatedAt: string;
  downloadUrl?: string;
}


export type DashboardAudience =
  | "executive"
  | "operational"
  | "ai"
  | "crm"
  | "workflow"
  | "financial";

export interface DashboardWidget {
  id: string;
  title: string;
  type: "kpi" | "chart" | "table" | "report";
  metricIds: string[];
  width: number;
  height: number;
  position: number;
}

export interface AnalyticsDashboard {
  id: string;
  name: string;
  description?: string;
  audience: DashboardAudience;
  widgets: DashboardWidget[];
  filters: AnalyticsFilter[];
  defaultDateRange: AnalyticsDateRange;
  isDefault: boolean;
}


export interface DrillDownAction {
  label: string;
  target: DrillDownTarget;
  href: string;
}

export interface DrillDownContext {
  module:
    | "dashboard"
    | "chats"
    | "contacts"
    | "knowledge-base"
    | "ai"
    | "automation";

  resourceId: string;

  resourceName: string;

  actions: DrillDownAction[];
}


export type AnalyticsPermission =
  | "dashboard.view"
  | "dashboard.manage"
  | "reports.view"
  | "reports.manage"
  | "reports.export"
  | "metrics.view"
  | "alerts.manage";

export interface MetricVisibility {
  metricId: string;
  permissions: AnalyticsPermission[];
}

export interface DashboardAccess {
  dashboardId: string;
  permissions: AnalyticsPermission[];
}

export interface ReportAccess {
  reportId: string;
  permissions: AnalyticsPermission[];
}


export type ChartType =
  | "line"
  | "bar"
  | "area"
  | "pie"
  | "donut"
  | "table"
  | "heatmap"
  | "scatter";

