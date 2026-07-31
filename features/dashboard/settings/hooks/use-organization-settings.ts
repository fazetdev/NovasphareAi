"use client";

import { useEffect, useState } from "react";

import { organizationService } from "../services/organization-service.mock";
import type { OrganizationSettings } from "../types/organization.types";

export function useOrganizationSettings() {
  const [organization, setOrganization] =
    useState<OrganizationSettings | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadOrganization() {
      try {
        const response =
          await organizationService.getOrganizationSettings();

        setOrganization(response);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    void loadOrganization();
  }, []);

  async function updateOrganization(
    settings: OrganizationSettings,
  ) {
    const updated =
      await organizationService.updateOrganizationSettings(
        settings,
      );

    setOrganization(updated);
  }

  return {
    organization,
    loading,
    error,
    updateOrganization,
  };
}
