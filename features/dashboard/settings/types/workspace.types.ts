export interface WorkspaceSettings {
  id: string;
  organizationId: string;
  name: string;
  description?: string;
  defaultLanguage: string;
  defaultTimezone: string;
  policyLockEnabled: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface WorkspacePolicyScope {
  scope: "platform" | "organization" | "team" | "user";
  inherited: boolean;
  locked: boolean;
}
