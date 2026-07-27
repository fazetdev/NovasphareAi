"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import type { ChartType } from "../../types/analytics.types";

type AnalyticsChartProps = {
  title: string;
  description?: string;
  type?: ChartType;
  data: {
    label: string;
    value: number;
  }[];
};

export function AnalyticsChart({
  title,
  description,
  type = "line",
  data,
}: AnalyticsChartProps) {
  return (
    <section className="rounded-lg border p-5">
      <header>
        <h3 className="font-semibold">
          {title}
        </h3>

        {description && (
          <p className="mt-1 text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </header>

      <div className="mt-6 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {type === "bar" ? (
            <BarChart data={data}>
              <CartesianGrid />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" />
            </BarChart>
          ) : type === "area" ? (
            <AreaChart data={data}>
              <CartesianGrid />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Area dataKey="value" />
            </AreaChart>
          ) : (
            <LineChart data={data}>
              <CartesianGrid />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Line
                dataKey="value"
                type="monotone"
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </section>
  );
}
