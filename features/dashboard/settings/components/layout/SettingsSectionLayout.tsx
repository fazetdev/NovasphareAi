"use client";

import type { ReactNode } from "react";

import {
  SettingsSidebar,
  type SettingsSection,
} from "./SettingsSidebar";

export type { SettingsSection };

interface SettingsSectionLayoutProps {
  activeSection: SettingsSection;
  onChange: (section: SettingsSection) => void;
  children: ReactNode;
}

export function SettingsSectionLayout({
  activeSection,
  onChange,
  children,
}: SettingsSectionLayoutProps) {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <SettingsSidebar
        activeSection={activeSection}
        onChange={onChange}
      />

      <section className="flex-1">
        {children}
      </section>
    </div>
  );
}
