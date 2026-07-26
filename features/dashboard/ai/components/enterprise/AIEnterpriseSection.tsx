"use client"

import { useAIEnterprise } from "../../hooks"

import {
  AIAuditLogsCard,
  AISecurityConfigurationCard,
} from "."

export function AIEnterpriseSection() {
  const {
    enterprise,
    isLoading,
    error,
  } = useAIEnterprise()

  if (isLoading) {
    return (
      <section className="rounded-lg border p-6">
        <p className="text-sm text-muted-foreground">
          Loading enterprise configuration...
        </p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="rounded-lg border p-6">
        <p className="text-sm text-destructive">
          {error}
        </p>
      </section>
    )
  }

  if (!enterprise) {
    return (
      <section className="rounded-lg border p-6">
        <p className="text-sm text-muted-foreground">
          No enterprise configuration available.
        </p>
      </section>
    )
  }

  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold">
          Enterprise
        </h2>

        <p className="text-sm text-muted-foreground">
          Manage security, governance, and workspace auditing.
        </p>
      </div>

      <AISecurityConfigurationCard
        security={enterprise.security}
      />

      <AIAuditLogsCard
        logs={enterprise.auditLogs}
      />
    </section>
  )
}
