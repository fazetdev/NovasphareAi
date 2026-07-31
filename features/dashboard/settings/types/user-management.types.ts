import type { UserStatus } from "@/features/auth/types";

export interface UserManagementPolicy {
  userId: string;
  status: UserStatus;
  roleIds: string[];
  departmentIds: string[];
  teamIds: string[];
  accessLocked: boolean;
  lastUpdatedAt: string;
}
