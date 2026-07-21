import {
  Bot,
  BookOpen,
  MessageSquare,
  Activity,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

import { DashboardStat } from "../../types/dashboard.types";

type DashboardStatCardProps = DashboardStat;

export function DashboardStatCard({
  id,
  title,
  value,
  description,
  trend,
  change,
}: DashboardStatCardProps) {
  let Icon = MessageSquare;

  if (id === "agents") {
    Icon = Bot;
  } else if (id === "documents") {
    Icon = BookOpen;
  } else if (id === "requests") {
    Icon = Activity;
  }

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div className="rounded-lg bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        <div
          className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
            trend === "up"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {trend === "up" ? (
            <TrendingUp className="h-4 w-4" />
          ) : (
            <TrendingDown className="h-4 w-4" />
          )}

          {change}
        </div>
      </div>

      <div className="mt-5">
        <p className="text-sm text-muted-foreground">
          {title}
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {value}
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
