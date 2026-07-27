"use client";

import { analyticsDashboardRegistry } from "../../types/dashboard.registry";

type DashboardSelectorProps = {
  value: string;
  onChange: (dashboardId: string) => void;
};

export function DashboardSelector({
  value,
  onChange,
}: DashboardSelectorProps) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="Analytics dashboards"
    >
      {analyticsDashboardRegistry.map((dashboard) => (
        <button
          key={dashboard.id}
          type="button"
          role="tab"
          aria-selected={value === dashboard.id}
          onClick={() => onChange(dashboard.id)}
          className="rounded-md border px-3 py-2 text-sm"
        >
          {dashboard.label}
        </button>
      ))}
    </div>
  );
}
