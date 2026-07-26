import type { AISecurityConfiguration } from "../../../types"

interface AISecurityConfigurationCardProps {
  security: AISecurityConfiguration
}

export function AISecurityConfigurationCard({
  security,
}: AISecurityConfigurationCardProps) {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Security Configuration
      </h3>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-sm text-muted-foreground">
            Encryption
          </p>
          <p className="font-medium">
            {security.encryptionEnabled
              ? "Enabled"
              : "Disabled"}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Audit Logging
          </p>
          <p className="font-medium">
            {security.auditLoggingEnabled
              ? "Enabled"
              : "Disabled"}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Retention
          </p>
          <p className="font-medium">
            {security.dataRetentionDays} days
          </p>
        </div>
      </div>
    </section>
  )
}
