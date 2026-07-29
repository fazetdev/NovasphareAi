export type SessionStatus =
  | "active"
  | "expired"
  | "revoked"

export interface DeviceSession {
  id: string
  deviceName: string
  browser?: string
  operatingSystem?: string
  ipAddress?: string
  lastActiveAt: string
  createdAt: string
  status: SessionStatus
  trustedDevice: boolean
}

export interface Session {
  id: string
  userId: string
  createdAt: string
  expiresAt: string
  status: SessionStatus
  device: DeviceSession
}

export interface SessionManagement {
  currentSessionId: string
  sessions: DeviceSession[]
}
