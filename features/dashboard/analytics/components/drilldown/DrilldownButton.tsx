"use client";

import {
  useDashboardDrilldown,
} from "../../hooks/useDashboardDrilldown";

import type {
  DrilldownTarget,
} from "../../hooks/useDashboardDrilldown";

interface DrilldownButtonProps {
  target: DrilldownTarget;

  label?: string;
}

export function DrilldownButton({
  target,
  label = "View Details",
}: DrilldownButtonProps) {
  const {
    open,
  } = useDashboardDrilldown();

  return (
    <button
      type="button"
      className="rounded-md border px-3 py-2 text-sm transition-colors hover:bg-muted"
      onClick={() => open(target)}
    >
      {label}
    </button>
  );
}
