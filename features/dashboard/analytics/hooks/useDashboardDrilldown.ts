"use client";

import { useCallback } from "react";

export interface DrilldownTarget {
  module: string;
  resourceId?: string;
}

interface UseDashboardDrilldownReturn {
  open: (
    target: DrilldownTarget,
  ) => void;
}

export function useDashboardDrilldown(): UseDashboardDrilldownReturn {
  const open = useCallback(
    (target: DrilldownTarget) => {
      console.log(
        "Drilldown:",
        target,
      );
    },
    [],
  );

  return {
    open,
  };
}
