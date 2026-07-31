"use client";

import { useTranslations } from "@/lib/i18n";

import type { MFAConfiguration } from "@/features/auth/types";

interface MFASettingsPanelProps {
  configuration: MFAConfiguration;
}

export function MFASettingsPanel({
  configuration,
}: MFASettingsPanelProps) {
  const t = useTranslations();

  return (
    <div className="rounded-xl border p-6">
      <h2 className="text-lg font-semibold">
        {t.settings.multiFactorAuthentication}
      </h2>

      <p className="mt-2 text-sm text-muted-foreground">
        {t.settings.status}:{" "}
        {configuration.enabled
          ? t.settings.enabled
          : t.settings.disabled}
      </p>

      <p className="mt-2 text-sm text-muted-foreground">
        {t.settings.providers}:{" "}
        {configuration.providers.join(", ")}
      </p>

      <p className="mt-2 text-sm text-muted-foreground">
        {t.settings.trustedDevices}:{" "}
        {configuration.trustedDevicesEnabled
          ? t.settings.allowed
          : t.settings.disabled}
      </p>
    </div>
  );
}
