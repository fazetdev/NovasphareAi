import type { SavedDashboard } from "../types";

export interface SavedDashboardResponse {
  data: SavedDashboard[];
  metadata: {
    generatedAt: string;
    cached: boolean;
  };
}

export interface SavedDashboardService {
  getSavedDashboards(): Promise<SavedDashboardResponse>;

  saveDashboard(
    dashboard: SavedDashboard,
  ): Promise<SavedDashboard>;

  deleteDashboard(
    id: string,
  ): Promise<{ success: boolean }>;
}

export const savedDashboardService: SavedDashboardService = {
  async getSavedDashboards() {
    return {
      data: [],
      metadata: {
        generatedAt: new Date().toISOString(),
        cached: false,
      },
    };
  },

  async saveDashboard(dashboard) {
    return dashboard;
  },

  async deleteDashboard() {
    return {
      success: true,
    };
  },
};
