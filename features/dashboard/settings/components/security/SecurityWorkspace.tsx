"use client";

import { useState } from "react";

import type {
  MFAConfiguration,
  SecurityPolicy,
} from "@/features/auth/types";

import { useSession } from "@/features/auth/hooks";

import { MFASettingsPanel } from "./MFASettingsPanel";
import { SecuritySettingsPanel } from "./SecuritySettingsPanel";
import { SessionManagementPanel } from "./SessionManagementPanel";

const defaultPolicy: SecurityPolicy = {
  passwordPolicyEnabled: true,
  mfaRequired: false,
  sessionTimeoutMinutes: 60,
  allowTrustedDevices: true,
};

const defaultMFA: MFAConfiguration = {
  enabled: false,
  providers: ["totp"],
  trustedDevicesEnabled: true,
  rememberDeviceEnabled: true,
};

export function SecurityWorkspace() {
  const [policy, setPolicy] =
    useState<SecurityPolicy>(defaultPolicy);

  const {
    sessions,
    revokeSession,
    revokeAllSessions,
  } = useSession();

  return (
    <div className="space-y-6">
      <SecuritySettingsPanel
        policy={policy}
        onChange={setPolicy}
      />

      <MFASettingsPanel
        configuration={defaultMFA}
      />

      <SessionManagementPanel
        sessions={sessions}
        onRevoke={revokeSession}
        onRevokeAll={revokeAllSessions}
      />
    </div>
  );
}
