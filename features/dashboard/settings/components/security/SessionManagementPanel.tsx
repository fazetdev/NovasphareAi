"use client";

import { useTranslations } from "@/lib/i18n";

import type { DeviceSession } from "@/features/auth/types";

interface SessionManagementPanelProps {
  sessions: DeviceSession[];
  onRevoke: (sessionId: string) => Promise<void>;
  onRevokeAll: () => Promise<void>;
}

export function SessionManagementPanel({
  sessions,
  onRevoke,
  onRevokeAll,
}: SessionManagementPanelProps) {
  const t = useTranslations();

  return (
    <div className="rounded-xl border p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          {t.settings.activeSessions}
        </h2>

        {sessions.length > 0 && (
          <button
            onClick={() => void onRevokeAll()}
            className="text-sm text-destructive"
          >
            {t.settings.revokeAll}
          </button>
        )}
      </div>

      {sessions.length === 0 ? (
        <p className="mt-2 text-sm text-muted-foreground">
          {t.settings.noActiveSessions}
        </p>
      ) : (
        <div className="mt-4 space-y-3">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="rounded-md border p-3"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">
                    {session.deviceName}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {session.browser}
                  </p>
                </div>

                <button
                  onClick={() =>
                    void onRevoke(session.id)
                  }
                  className="text-sm text-destructive"
                >
                  {t.settings.revoke}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
