export type SettingsScope =
  | "platform"
  | "organization"
  | "team"
  | "user";

export type PolicyStatus =
  | "active"
  | "disabled"
  | "locked";

export interface SettingsConfiguration {
  id: string;
  scope: SettingsScope;
  key: string;
  value: unknown;
  status: PolicyStatus;
  inheritedFrom?: SettingsScope;
  locked: boolean;
  updatedAt: string;
}

export interface PolicyContract<T = unknown> {
  id: string;
  name: string;
  scope: SettingsScope;
  value: T;
  locked: boolean;
  inherited: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface FeatureEntitlement {
  featureKey: string;
  enabled: boolean;
  limit?: number;
  locked: boolean;
}
