"use client"

export function NotificationPreferences() {
  return (
    <div className="space-y-4 rounded-md border p-4">
      <h3 className="font-medium">
        Notification Preferences
      </h3>

      <div className="space-y-3">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            defaultChecked
          />
          Notify on failed executions
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            defaultChecked
          />
          Notify when workflow completes
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
          />
          Notify on execution delays
        </label>
      </div>
    </div>
  )
}
