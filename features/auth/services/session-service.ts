import type { DeviceSession } from "../types"

export interface SessionService {
  getSessions(userId: string): Promise<DeviceSession[]>

  revokeSession(sessionId: string): Promise<void>

  revokeAllSessions(userId: string): Promise<void>

  trustDevice(deviceId: string): Promise<void>

  removeTrustedDevice(deviceId: string): Promise<void>
}
