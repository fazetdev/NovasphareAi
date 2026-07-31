"use client";

import { useEffect, useState } from "react";

import { policyService } from "../services/policy-service.mock";
import type { PolicyContract } from "../types/settings.types";

export function useSettings() {
  const [policies, setPolicies] = useState<PolicyContract[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadPolicies() {
      try {
        const response = await policyService.getPolicies();
        setPolicies(response);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    void loadPolicies();
  }, []);

  return {
    policies,
    loading,
    error,
  };
}
