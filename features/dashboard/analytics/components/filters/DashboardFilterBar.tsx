"use client";

interface DashboardFilterBarProps {
  dateRange: string;

  onDateRangeChange: (
    value: string,
  ) => void;
}

const dateRanges = [
  {
    value: "7d",
    label: "Last 7 Days",
  },
  {
    value: "30d",
    label: "Last 30 Days",
  },
  {
    value: "90d",
    label: "Last 90 Days",
  },
  {
    value: "1y",
    label: "Last Year",
  },
];

export function DashboardFilterBar({
  dateRange,
  onDateRangeChange,
}: DashboardFilterBarProps) {
  return (
    <div className="flex items-center gap-4 rounded-lg border p-4">
      <label
        htmlFor="dashboard-date-range"
        className="text-sm font-medium"
      >
        Date Range
      </label>

      <select
        id="dashboard-date-range"
        className="rounded-md border px-3 py-2"
        value={dateRange}
        onChange={(event) =>
          onDateRangeChange(
            event.target.value,
          )
        }
      >
        {dateRanges.map((range) => (
          <option
            key={range.value}
            value={range.value}
          >
            {range.label}
          </option>
        ))}
      </select>
    </div>
  );
}
