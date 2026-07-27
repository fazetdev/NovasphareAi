"use client";

import { useCallback, useEffect, useState } from "react";

import {
  analyticsService,
  type AnalyticsQuery,
} from "../services/analytics.mock";

import type { KPIGroup } from "../types/analytics.types";

export function useKPIs(initialQuery?: AnalyticsQuery) {
  const [data, setData] = useState<KPIGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(
    async (query: AnalyticsQuery = initialQuery ?? {}) => {
      try {
        setLoading(true);
        setError(null);

        const response =
          await analyticsService.getKPIs(query);

        setData(response.data);
      } catch {
        setError("Failed to load KPIs.");
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
