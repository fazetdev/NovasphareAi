"use client";

import { useState } from "react";

import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { EmptyState } from "@/components/ui/EmptyState";
import { ErrorState } from "@/components/ui/ErrorState";
import { Skeleton } from "@/components/ui/Skeleton";
import { useTranslations } from "@/lib/i18n";

import { useSettings } from "../../hooks/use-settings";

import { OrganizationProfile } from "../organization/OrganizationProfile";
import { PolicyWorkspace } from "../policies/PolicyWorkspace";
import { SecurityWorkspace } from "../security/SecurityWorkspace";
import { UsersWorkspace } from "../users/UsersWorkspace";
import { WorkspaceSettingsPanel } from "../workspace/WorkspaceSettingsPanel";

import {
  SettingsSectionLayout,
  type SettingsSection,
} from "./SettingsSectionLayout";

export function SettingsWorkspaceContent() {
  const t = useTranslations();

  const {
    policies,
    loading,
    error,
  } = useSettings();

  const [section, setSection] =
    useState<SettingsSection>("organization");

  if (loading) {
    return (
      <PageContainer>
        <Skeleton className="h-32 w-full" />
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <ErrorState
          title={t.settings.unableToLoad}
          description={
            t.settings.unableToLoadDescription
          }
        />
      </PageContainer>
    );
  }

  function renderSection() {
    switch (section) {
      case "organization":
        return <OrganizationProfile />;

      case "security":
        return <SecurityWorkspace />;

      case "users":
        return <UsersWorkspace />;

      case "policies":
        return <PolicyWorkspace />;

      case "workspace":
        return <WorkspaceSettingsPanel />;

      default:
        return (
          <EmptyState
            title={t.settings.unavailable}
            description={
              t.settings.unavailableDescription
            }
          />
        );
    }
  }

  return (
    <PageContainer>
      <PageHeader
        title={t.settings.title}
        description={t.settings.description}
      />

      <SettingsSectionLayout
        activeSection={section}
        onChange={setSection}
      >
        {renderSection()}
      </SettingsSectionLayout>

      {policies.length > 0 && (
        <p className="mt-6 text-sm text-muted-foreground">
          Policies: {policies.length}
        </p>
      )}
    </PageContainer>
  );
}
