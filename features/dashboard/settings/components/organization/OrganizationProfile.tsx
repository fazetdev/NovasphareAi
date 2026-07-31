"use client";

import { ErrorState } from "@/components/ui/ErrorState";
import { Skeleton } from "@/components/ui/Skeleton";
import { useTranslations } from "@/lib/i18n";

import { useOrganizationSettings } from "../../hooks/use-organization-settings";

import { OrganizationForm } from "./OrganizationForm";

export function OrganizationProfile() {
  const t = useTranslations();

  const {
    organization,
    loading,
    error,
    updateOrganization,
  } = useOrganizationSettings();

  if (loading) {
    return <Skeleton className="h-32 w-full" />;
  }

  if (error || !organization) {
    return (
      <ErrorState
        title={t.settings.organizationLoadError}
        description={
          t.settings.organizationLoadErrorDescription
        }
      />
    );
  }

  return (
    <div className="rounded-xl border p-6">
      <h2 className="mb-4 text-lg font-semibold">
        {t.settings.organizationProfile}
      </h2>

      <OrganizationForm
        organization={organization}
        onSave={updateOrganization}
      />
    </div>
  );
}
