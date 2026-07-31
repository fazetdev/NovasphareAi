"use client";

import { useTranslations } from "@/lib/i18n";

import type { UserIdentity } from "@/features/auth/types";

interface UserManagementPanelProps {
  users: UserIdentity[];
  onApprove: (userId: string) => Promise<void>;
  onSuspend: (userId: string) => Promise<void>;
}

export function UserManagementPanel({
  users,
  onApprove,
  onSuspend,
}: UserManagementPanelProps) {
  const t = useTranslations();

  return (
    <div className="rounded-xl border p-6">
      <h2 className="text-lg font-semibold">
        {t.settings.userManagement}
      </h2>

      <div className="mt-4 space-y-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between rounded-md border p-3"
          >
            <div>
              <p className="font-medium">
                {user.name}
              </p>

              <p className="text-sm text-muted-foreground">
                {user.email}
              </p>

              <p className="text-sm text-muted-foreground">
                {t.settings.status}: {user.status}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => void onApprove(user.id)}
                className="rounded-md border px-3 py-1 text-sm"
              >
                {t.settings.approve}
              </button>

              <button
                onClick={() => void onSuspend(user.id)}
                className="rounded-md border px-3 py-1 text-sm"
              >
                {t.settings.suspend}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
