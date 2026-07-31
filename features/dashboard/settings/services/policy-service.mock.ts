import type { PolicyContract } from "../types/settings.types";

const policies: PolicyContract[] = [];

export const policyService = {
  async getPolicies(): Promise<PolicyContract[]> {
    return policies;
  },

  async getPolicy(
    id: string,
  ): Promise<PolicyContract | undefined> {
    return policies.find((policy) => policy.id === id);
  },
};
