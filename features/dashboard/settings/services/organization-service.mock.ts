import type { OrganizationSettings } from "../types/organization.types";

const organizationSettings: OrganizationSettings = {
  organizationId: "organization-001",
  displayName: "NovaCore Organization",
  legalName: "NovaCore Organization Ltd",
  defaultTimezone: "Asia/Riyadh",
  defaultLanguage: "en",
  dataRegion: "SA",
  securityPolicyLocked: true,
  updatedAt: new Date().toISOString(),
};

export const organizationService = {
  async getOrganizationSettings(): Promise<OrganizationSettings> {
    return organizationSettings;
  },

  async updateOrganizationSettings(
    settings: OrganizationSettings,
  ): Promise<OrganizationSettings> {
    return settings;
  },
};
