"use client"

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
  const {
    executions,
    workflowCount,
  } = useAutomationAnalytics()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">
          Automation Analytics
        </h2>

        <p className="text-sm text-muted-foreground">
          Monitor workflow performance and execution health.
        </p>
      </div>

      <AnalyticsOverview />

      <WorkflowPerformanceCards />

      <ExecutionStatisticsCards />

      <ExecutionTrendChart />

      <WorkflowActivityTimeline />

      <MonitoringAlerts />

      <div className="text-sm text-muted-foreground">
        Workflows: {workflowCount}
        {" | "}
        Executions: {executions.length}
      </div>
    </div>
  )
}
