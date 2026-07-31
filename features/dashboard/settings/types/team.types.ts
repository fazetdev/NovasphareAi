export interface TeamSettings {
  teamId: string;
  departmentId: string;
  policyInheritanceEnabled: boolean;
  lockedPolicies: string[];
  memberLimit?: number;
  updatedAt: string;
}
