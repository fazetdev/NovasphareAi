"use client";

import { EmptyState } from "@/components/ui/EmptyState";
import { ErrorState } from "@/components/ui/ErrorState";
import { Skeleton } from "@/components/ui/Skeleton";
import { useTranslations } from "@/lib/i18n";

import { useUserManagement } from "../../hooks";

import { InvitationPanel } from "./InvitationPanel";
import { UserManagementPanel } from "./UserManagementPanel";

export function UsersWorkspace() {
  const t = useTranslations();

  const {
    users,
    loading,
    error,
    approveUser,
    suspendUser,
  } = useUserManagement();

  if (loading) {
    return <Skeleton className="h-32 w-full" />;
  }

  if (error) {
    return (
      <ErrorState
        title={t.settings.unableToLoadUsers}
        description={
          t.settings.unableToLoadUsersDescription
        }
      />
    );
  }

  if (users.length === 0) {
    return (
      <EmptyState
        title={t.settings.noUsers}
        description={
          t.settings.noUsersDescription
        }
      />
    );
  }

  return (
    <div className="space-y-6">
      <UserManagementPanel
        users={users}
        onApprove={approveUser}
        onSuspend={suspendUser}
      />

      <InvitationPanel />
    </div>
  );
}
