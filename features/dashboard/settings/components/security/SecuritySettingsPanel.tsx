"use client";

import { useTranslations } from "@/lib/i18n";

import type { SecurityPolicy } from "@/features/auth/types";

interface SecuritySettingsPanelProps {
  policy: SecurityPolicy;
  onChange: (policy: SecurityPolicy) => void;
}

export function SecuritySettingsPanel({
  policy,
  onChange,
}: SecuritySettingsPanelProps) {
  const t = useTranslations();

  return (
    <div className="space-y-4 rounded-xl border p-6">
      <h2 className="text-lg font-semibold">
        {t.settings.securityPolicy}
      </h2>

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={policy.passwordPolicyEnabled}
          onChange={(event) =>
            onChange({
              ...policy,
              passwordPolicyEnabled:
                event.target.checked,
            })
          }
        />
        {t.settings.passwordPolicyEnabled}
      </label>

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={policy.mfaRequired}
          onChange={(event) =>
            onChange({
              ...policy,
              mfaRequired: event.target.checked,
            })
          }
        />
        {t.settings.requireMfa}
      </label>

      <div>
        <label className="text-sm font-medium">
          {t.settings.sessionTimeoutMinutes}
        </label>

        <input
          type="number"
          value={policy.sessionTimeoutMinutes}
          onChange={(event) =>
            onChange({
              ...policy,
              sessionTimeoutMinutes:
                Number(event.target.value),
            })
          }
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </div>

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={policy.allowTrustedDevices}
          onChange={(event) =>
            onChange({
              ...policy,
              allowTrustedDevices:
                event.target.checked,
            })
          }
        />
        {t.settings.allowTrustedDevices}
      </label>
    </div>
  );
}
