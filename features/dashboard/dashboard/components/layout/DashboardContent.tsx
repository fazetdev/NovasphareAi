"use client";

import { DashboardToolbar } from "../header/DashboardToolbar";
import { DashboardSearch } from "../header/DashboardSearch";

import { DashboardStatCard } from "../overview/DashboardStatCard";
import { QuickActions } from "../overview/QuickActions";

import { SystemHealthCard } from "../health/SystemHealthCard";
import { WorkspaceOverview } from "../workspace/WorkspaceOverview";

import { RecentActivity } from "../activity/RecentActivity";
import { UsageAnalytics } from "../analytics/UsageAnalytics";

import { RecentConversations } from "../conversations/RecentConversations";
import { NotificationsCard } from "../notifications/NotificationsCard";
import { AIInsightsCard } from "../insights/AIInsightsCard";

import {
  dashboardStats,
  recentActivities,
  recentConversations,
  systemHealth,
  usageAnalytics,
} from "../../services/dashboard.mock";

export function DashboardContent() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <section className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Dashboard
          </h1>

          <p className="mt-1 text-muted-foreground">
            Welcome back to NovaCore AI Platform.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 lg:w-auto lg:items-end">
          <DashboardSearch />
          <DashboardToolbar />
        </div>

      </section>

      {/* KPI Cards */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <DashboardStatCard
            key={stat.id}
            {...stat}
          />
        ))}
      </section>

      {/* Quick Actions + Health + Workspace */}
      <section className="grid gap-6 xl:grid-cols-4">

        <div className="xl:col-span-2">
          <QuickActions />
        </div>

        <SystemHealthCard
          items={systemHealth}
        />

        <WorkspaceOverview />

      </section>

      {/* Activity + Analytics */}
      <section className="grid gap-6 xl:grid-cols-2">

        <RecentActivity
          activities={recentActivities}
        />

        <UsageAnalytics
          data={usageAnalytics}
        />

      </section>

      {/* Conversations + Notifications */}
      <section className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <RecentConversations
            conversations={recentConversations}
          />
        </div>

        <NotificationsCard />

      </section>

      {/* AI Insights */}
      <section>

        <AIInsightsCard />

      </section>

    </div>
  );
}
