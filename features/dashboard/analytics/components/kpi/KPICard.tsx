import type { KPI } from "../../types/analytics.types";

type KPICardProps = {
  kpi: KPI;
};

export function KPICard({
  kpi,
}: KPICardProps) {
  return (
    <article
      className="rounded-lg border p-5"
      aria-label={kpi.title}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-medium text-muted-foreground">
          {kpi.title}
        </h3>

        {kpi.icon && (
          <span aria-hidden="true">
            {kpi.icon}
          </span>
        )}
      </div>

      <p className="mt-4 text-2xl font-bold">
        {kpi.value.value}
        {kpi.unit ?? ""}
      </p>

      <div className="mt-2 flex items-center gap-2 text-sm">
        <span>
          {kpi.value.trend === "up" ? "+" : ""}
          {kpi.value.trend}
        </span>

        <span className="text-muted-foreground">
          {kpi.description}
        </span>
      </div>
    </article>
  );
}
