import type {
  AnalyticsDashboard,
  AnalyticsFilter,
  AnalyticsMetadata,
  AnalyticsPagination,
  AnalyticsSort,
  KPIGroup,
  SavedReport,
} from "../types/analytics.types";

import { analyticsDashboards } from "./mock/dashboard.mock";
import { kpiGroups } from "./mock/kpi.mock";
import { savedReports } from "./mock/report.mock";

export interface AnalyticsQuery {
  search?: string;
  filters?: AnalyticsFilter[];
  sort?: AnalyticsSort[];
  page?: number;
  pageSize?: number;
}

export interface AnalyticsResponse<T> {
  data: T;
  pagination?: AnalyticsPagination;
  metadata: AnalyticsMetadata;
}

export interface AnalyticsService {
  getDashboards(
    query?: AnalyticsQuery,
  ): Promise<AnalyticsResponse<AnalyticsDashboard[]>>;

  getKPIs(
    query?: AnalyticsQuery,
  ): Promise<AnalyticsResponse<KPIGroup[]>>;

  getReports(
    query?: AnalyticsQuery,
  ): Promise<AnalyticsResponse<SavedReport[]>>;
}

const metadata: AnalyticsMetadata = {
  generatedAt: new Date().toISOString(),
  lastUpdated: new Date().toISOString(),
  cached: false,
};

const pagination: AnalyticsPagination = {
  page: 1,
  pageSize: 25,
  total: 0,
};

export const analyticsService: AnalyticsService = {
  async getDashboards() {
    return {
      data: analyticsDashboards,
      pagination: {
        ...pagination,
        total: analyticsDashboards.length,
      },
      metadata,
    };
  },

  async getKPIs() {
    return {
      data: kpiGroups,
      pagination: {
        ...pagination,
        total: kpiGroups.length,
      },
      metadata,
    };
  },

  async getReports() {
    return {
      data: savedReports,
      pagination: {
        ...pagination,
        total: savedReports.length,
      },
      metadata,
    };
  },
};
