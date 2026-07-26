"use client"

export function WorkspaceConfiguration() {
  return (
    <div className="space-y-4 rounded-md border p-4">
      <h3 className="font-medium">
        Workspace Configuration
      </h3>

      <div className="space-y-3">
        <div>
          <label className="text-sm">
            Workspace Name
          </label>

          <input
            className="mt-1 w-full rounded-md border p-2 text-sm"
            placeholder="Automation Workspace"
          />
        </div>

        <div>
          <label className="text-sm">
            Default Environment
          </label>

          <select
            className="mt-1 w-full rounded-md border p-2 text-sm"
          >
            <option>
              Production
            </option>

            <option>
              Testing
            </option>

            <option>
              Development
            </option>
          </select>
        </div>
      </div>
    </div>
  )
}
