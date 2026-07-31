"use client"

import { useTranslations } from "@/lib/i18n/hooks"

import {
  useAutomationSettings,
} from "../../hooks/useAutomationSettings"

import {
  SettingsOverview,
} from "./general/SettingsOverview"

import {
  WorkspaceConfiguration,
} from "./general/WorkspaceConfiguration"

import {
  WorkflowPermissions,
} from "./permissions/WorkflowPermissions"

import {
  ExecutionPolicies,
} from "./policies/ExecutionPolicies"

import {
  NotificationPreferences,
} from "./notifications/NotificationPreferences"

import {
  AuditLogSettings,
} from "./audit/AuditLogSettings"

export function AutomationSettings() {
  const t = useTranslations()

  const {
    settings,
  } = useAutomationSettings()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">
          {t.automation.settingsTitle}
        </h2>

        <p className="text-sm text-muted-foreground">
          {t.automation.settingsDescription}
        </p>
      </div>

      <SettingsOverview />

      <WorkspaceConfiguration />

      <WorkflowPermissions />

      <ExecutionPolicies />

      <NotificationPreferences />

      <AuditLogSettings />

      {settings && (
        <div className="rounded-md border p-4 text-sm text-muted-foreground">
          {t.automation.settingsLoaded}
        </div>
      )}
    </div>
  )
}
