export interface AIAuditLog {
  id: string

  action: string
  actor: string
  resource: string

  timestamp: string

  metadata: Record<string, unknown>
}

export interface AISecurityConfiguration {
  encryptionEnabled: boolean
  auditLoggingEnabled: boolean
  dataRetentionDays: number

  metadata: Record<string, unknown>
}

export interface AIEnterpriseConfiguration {
  workspaceId: string

  security: AISecurityConfiguration

  auditLogs: AIAuditLog[]

  createdAt: string
  updatedAt: string
}
