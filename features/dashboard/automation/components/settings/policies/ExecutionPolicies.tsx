"use client"

export function ExecutionPolicies() {
  return (
    <div className="space-y-4 rounded-md border p-4">
      <h3 className="font-medium">
        Execution Policies
      </h3>

      <div className="space-y-3">
        <div>
          <label className="text-sm">
            Maximum Retries
          </label>

          <input
            type="number"
            defaultValue={3}
            className="mt-1 w-full rounded-md border p-2 text-sm"
          />
        </div>

        <div>
          <label className="text-sm">
            Execution Timeout (seconds)
          </label>

          <input
            type="number"
            defaultValue={300}
            className="mt-1 w-full rounded-md border p-2 text-sm"
          />
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            defaultChecked
          />
          Continue workflow on step failure
        </label>
      </div>
    </div>
  )
}
