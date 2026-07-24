export function AIConfigurationActions() {
  return (
    <div className="flex flex-wrap justify-end gap-3">
      <button
        type="button"
        className="rounded-md border px-4 py-2 text-sm"
      >
        Reset
      </button>

      <button
        type="button"
        className="rounded-md border bg-primary px-4 py-2 text-sm text-primary-foreground"
      >
        Save Configuration
      </button>
    </div>
  )
}
