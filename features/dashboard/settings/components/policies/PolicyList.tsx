"use client";

import type { PolicyContract } from "../../types/settings.types";

interface PolicyListProps {
  policies: PolicyContract[];
}

export function PolicyList({
  policies,
}: PolicyListProps) {
  return (
    <div className="rounded-xl border p-6">
      <h2 className="text-lg font-semibold">
        Organization Policies
      </h2>

      {policies.length === 0 ? (
        <p className="mt-2 text-sm text-muted-foreground">
          No policies configured.
        </p>
      ) : (
        <div className="mt-4 space-y-3">
          {policies.map((policy) => (
            <div
              key={policy.id}
              className="rounded-md border p-3"
            >
              <p className="font-medium">
                {policy.name}
              </p>

              <p className="text-sm text-muted-foreground">
                Scope: {policy.scope}
              </p>

              <p className="text-sm text-muted-foreground">
                {policy.locked
                  ? "Locked"
                  : "Editable"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
