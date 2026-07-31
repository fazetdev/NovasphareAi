"use client";

import { useTranslations } from "@/lib/i18n";

import type { WorkspaceSettings } from "../../types/workspace.types";

const workspace: WorkspaceSettings = {
  id: "workspace-001",
  organizationId: "organization-001",
  name: "NovaCore Workspace",
  description: "Enterprise AI workspace",
  defaultLanguage: "en",
  defaultTimezone: "Asia/Riyadh",
  policyLockEnabled: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export function WorkspaceSettingsPanel() {
  const t = useTranslations();

  return (
    <div className="rounded-xl border p-6">
      <h2 className="text-lg font-semibold">
        {t.settings.workspaceSettings}
      </h2>

      <div className="mt-3 space-y-1 text-sm text-muted-foreground">
        <p>
          {t.settings.name}: {workspace.name}
        </p>

        <p>
          {t.settings.language}: {workspace.defaultLanguage}
        </p>

        <p>
          {t.settings.timezone}: {workspace.defaultTimezone}
        </p>

        <p>
          {t.settings.policyLock}:{" "}
          {workspace.policyLockEnabled
            ? t.settings.enabled
            : t.settings.disabled}
        </p>
      </div>
    </div>
  );
}
