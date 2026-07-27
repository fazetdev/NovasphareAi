"use client";

import { useCallback, useEffect, useState } from "react";

import {
  analyticsService,
  type AnalyticsQuery,
} from "../services/analytics.mock";

import type { AnalyticsDashboard } from "../types/analytics.types";

export function useDashboard(initialQuery?: AnalyticsQuery) {
  const [data, setData] = useState<AnalyticsDashboard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(
    async (query: AnalyticsQuery = initialQuery ?? {}) => {
      try {
        setLoading(true);
        setError(null);

        const response =
          await analyticsService.getDashboards(query);

        setData(response.data);
      } catch {
        setError("Failed to load dashboards.");
      } finally {
        setLoading(false);
      }
    },
    [initialQuery]
  );

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
