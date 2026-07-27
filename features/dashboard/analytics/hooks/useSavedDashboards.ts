"use client";

import { useCallback, useEffect, useState } from "react";

import { savedDashboardService } from "../services/saved-dashboard.mock";

import type { SavedDashboard } from "../types";

export function useSavedDashboards() {
  const [data, setData] = useState<SavedDashboard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response =
        await savedDashboardService.getSavedDashboards();

      setData(response.data);
    } catch {
      setError("Failed to load saved dashboards.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return {
    data,
    loading,
    error,
    refresh: load,
  };
}
