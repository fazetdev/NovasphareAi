interface DashboardSelectorProps {
  value: string;

  onChange?: (
    value: string,
  ) => void;
}

export function DashboardSelector({
  value,
  onChange,
}: DashboardSelectorProps) {
  return (
    <select
      className="rounded-md border p-2"
      value={value}
      onChange={(event) =>
        onChange?.(event.target.value)
      }
    >
      <option value="executive">
        Executive
      </option>

      <option value="ai">
        AI Performance
      </option>

      <option value="operational">
        Operational
      </option>
    </select>
  );
}


interface DashboardRendererProps {
  dashboardId: string;

  children?: React.ReactNode;
}

export function DashboardRenderer({
  dashboardId,
  children,
}: DashboardRendererProps) {
  return (
    <div
      className="space-y-6"
      data-dashboard-id={dashboardId}
    >
      {children}
    </div>
  );
}
