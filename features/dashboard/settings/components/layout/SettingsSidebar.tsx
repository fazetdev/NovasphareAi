"use client";

import { useTranslations } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export type SettingsSection =
  | "organization"
  | "security"
  | "users"
  | "policies"
  | "workspace";

interface SettingsSidebarProps {
  activeSection: SettingsSection;
  onChange: (section: SettingsSection) => void;
}

export function SettingsSidebar({
  activeSection,
  onChange,
}: SettingsSidebarProps) {
  const t = useTranslations();

  const sections = [
    {
      id: "organization" as const,
      label: t.settings.organization,
    },
    {
      id: "security" as const,
      label: t.settings.security,
    },
    {
      id: "users" as const,
      label: t.settings.users,
    },
    {
      id: "policies" as const,
      label: t.settings.policies,
    },
    {
      id: "workspace" as const,
      label: t.settings.workspace,
    },
  ];

  return (
    <aside className="w-full rounded-xl border p-3 md:w-64">
      <nav className="space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => onChange(section.id)}
            className={cn(
              "w-full rounded-md px-3 py-2 text-left text-sm transition",
              activeSection === section.id
                ? "bg-muted font-medium"
                : "text-muted-foreground hover:bg-muted",
            )}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
