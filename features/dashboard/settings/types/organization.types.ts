export interface OrganizationSettings {
  organizationId: string;
  displayName: string;
  legalName?: string;
  defaultTimezone: string;
  defaultLanguage: string;
  dataRegion?: string;
  securityPolicyLocked: boolean;
  updatedAt: string;
}
