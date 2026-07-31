"use client";

import { useState } from "react";

import { useTranslations } from "@/lib/i18n";

import type { OrganizationSettings } from "../../types/organization.types";

interface OrganizationFormProps {
  organization: OrganizationSettings;
  onSave: (organization: OrganizationSettings) => Promise<void>;
}

export function OrganizationForm({
  organization,
  onSave,
}: OrganizationFormProps) {
  const t = useTranslations();

  const [form, setForm] =
    useState<OrganizationSettings>(organization);

  const [saving, setSaving] = useState(false);

  async function handleSave() {
    setSaving(true);

    try {
      await onSave(form);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium">
          {t.settings.organizationName}
        </label>

        <input
          value={form.displayName}
          onChange={(event) =>
            setForm({
              ...form,
              displayName: event.target.value,
            })
          }
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          {t.settings.defaultLanguage}
        </label>

        <input
          value={form.defaultLanguage}
          onChange={(event) =>
            setForm({
              ...form,
              defaultLanguage: event.target.value,
            })
          }
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label className="text-sm font-medium">
          {t.settings.timezone}
        </label>

        <input
          value={form.defaultTimezone}
          onChange={(event) =>
            setForm({
              ...form,
              defaultTimezone: event.target.value,
            })
          }
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </div>

      <button
        type="button"
        onClick={handleSave}
        disabled={saving}
        className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground disabled:opacity-50"
      >
        {saving
          ? t.settings.saving
          : t.common.save}
      </button>
    </div>
  );
}
