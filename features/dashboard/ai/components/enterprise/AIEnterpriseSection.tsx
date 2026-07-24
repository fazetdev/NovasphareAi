import { AIAccessControl } from "./access/AIAccessControl"
import { AIAuditLogs } from "./audit/AIAuditLogs"
import { AIEnvironmentManagement } from "./environments/AIEnvironmentManagement"
import { AISecuritySettings } from "./security/AISecuritySettings"

export function AIEnterpriseSection() {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold">
          Enterprise Management
        </h2>

        <p className="text-sm text-muted-foreground">
          Manage security, access control, environments, and audit activity.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <AISecuritySettings />

        <AIAccessControl />

        <AIAuditLogs />

        <AIEnvironmentManagement />
      </div>
    </section>
  )
}
