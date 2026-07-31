"use client"

import { useTranslations } from "@/lib/i18n/hooks"

import {
  useAutomationAnalytics,
} from "../../hooks/useAutomationAnalytics"

import {
  AnalyticsOverview,
} from "./cards/AnalyticsOverview"

import {
  WorkflowPerformanceCards,
} from "./cards/WorkflowPerformanceCards"

import {
  ExecutionStatisticsCards,
} from "./cards/ExecutionStatisticsCards"

import {
  ExecutionTrendChart,
} from "./charts/ExecutionTrendChart"

import {
  WorkflowActivityTimeline,
} from "./timeline/WorkflowActivityTimeline"

import {
  MonitoringAlerts,
} from "./alerts/MonitoringAlerts"

export function AutomationAnalytics() {
  const t = useTranslations()

  const {
    executions,
    workflowCount,
  } = useAutomationAnalytics()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">
          {t.automation.analyticsTitle}
        </h2>

        <p className="text-sm text-muted-foreground">
          {t.automation.analyticsDescription}
        </p>
      </div>

      <AnalyticsOverview />

      <WorkflowPerformanceCards />

      <ExecutionStatisticsCards />

      <ExecutionTrendChart />

      <WorkflowActivityTimeline />

      <MonitoringAlerts />

      <div className="text-sm text-muted-foreground">
        {t.automation.workflows}: {workflowCount}
        {" | "}
        {t.automation.executions}: {executions.length}
      </div>
    </div>
  )
}
