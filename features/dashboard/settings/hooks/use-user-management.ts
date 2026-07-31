"use client";

import { useEffect, useState } from "react";

import { mockUserService } from "@/features/auth/services";
import type { UserIdentity } from "@/features/auth/types";

export function useUserManagement() {
  const [users, setUsers] = useState<UserIdentity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function loadUsers() {
    try {
      setLoading(true);

      const response = await mockUserService.getUsers();

      setUsers(response);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadUsers();
  }, []);

  async function approveUser(userId: string) {
    const updated =
      await mockUserService.approveUser(userId);

    setUsers((current) =>
      current.map((user) =>
        user.id === userId ? updated : user
      )
    );
  }

  async function suspendUser(userId: string) {
    const updated =
      await mockUserService.suspendUser(userId);

    setUsers((current) =>
      current.map((user) =>
        user.id === userId ? updated : user
      )
    );
  }

  return {
    users,
    loading,
    error,
    reload: loadUsers,
    approveUser,
    suspendUser,
  };
}
