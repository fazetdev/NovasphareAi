"use client";

import type {
  DashboardAudience,
} from "../../types/analytics.types";

interface DashboardSwitcherProps {
  value: DashboardAudience;

  onChange: (
    value: DashboardAudience,
  ) => void;
}

const dashboardOptions: {
  value: DashboardAudience;
  label: string;
}[] = [
  {
    value: "executive",
    label: "Executive",
  },
  {
    value: "ai",
    label: "AI Operations",
  },
  {
    value: "crm",
    label: "CRM",
  },
  {
    value: "workflow",
    label: "Workflow",
  },
  {
    value: "financial",
    label: "Financial",
  },
];

export function DashboardSwitcher({
  value,
  onChange,
}: DashboardSwitcherProps) {
  return (
    <select
      className="rounded-md border px-3 py-2"
      value={value}
      onChange={(event) =>
        onChange(
          event.target
            .value as DashboardAudience,
        )
      }
    >
      {dashboardOptions.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}
