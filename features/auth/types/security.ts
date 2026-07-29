export type MFAProvider =
  | "totp"
  | "email"
  | "passkey"
  | "backup_codes"

export interface MFAConfiguration {
  enabled: boolean
  providers: MFAProvider[]
  trustedDevicesEnabled: boolean
  rememberDeviceEnabled: boolean
}

export interface Invitation {
  id: string
  email: string
  invitedBy: string
  departmentIds: string[]
  teamIds: string[]
  roleIds: string[]
  expiresAt: string
  acceptedAt?: string
}

export type ApprovalStatus =
  | "not_required"
  | "pending"
  | "approved"
  | "rejected"

export interface UserApproval {
  status: ApprovalStatus
  approvedBy?: string
  approvedAt?: string
}

export interface SecurityPolicy {
  passwordPolicyEnabled: boolean
  mfaRequired: boolean
  sessionTimeoutMinutes: number
  allowTrustedDevices: boolean
}
