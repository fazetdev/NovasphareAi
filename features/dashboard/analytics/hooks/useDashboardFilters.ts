"use client";

import { useState } from "react";

export interface DashboardFilters {
  dateRange: string;
}

interface UseDashboardFiltersReturn {
  filters: DashboardFilters;

  setDateRange: (
    value: string,
  ) => void;
}

export function useDashboardFilters(): UseDashboardFiltersReturn {
  const [filters, setFilters] =
    useState<DashboardFilters>({
      dateRange: "30d",
    });

  function setDateRange(
    value: string,
  ) {
    setFilters((previous) => ({
      ...previous,
      dateRange: value,
    }));
  }

  return {
    filters,
    setDateRange,
  };
}
