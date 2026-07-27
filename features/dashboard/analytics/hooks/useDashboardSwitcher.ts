"use client";

import { useState } from "react";

import type {
  DashboardAudience,
} from "../types/analytics.types";

interface UseDashboardSwitcherReturn {
  dashboard: DashboardAudience;

  setDashboard: (
    dashboard: DashboardAudience,
  ) => void;
}

export function useDashboardSwitcher(): UseDashboardSwitcherReturn {
  const [dashboard, setDashboard] =
    useState<DashboardAudience>(
      "executive",
    );

  return {
    dashboard,
    setDashboard,
  };
}
