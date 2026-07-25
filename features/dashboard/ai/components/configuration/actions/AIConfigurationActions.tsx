interface AIConfigurationActionsProps {
  onReset?: () => void
  onSave?: () => void
  isSaving?: boolean
}

export function AIConfigurationActions({
  onReset,
  onSave,
  isSaving = false,
}: AIConfigurationActionsProps) {
  return (
    <div className="flex flex-wrap justify-end gap-3">
      <button
        type="button"
        onClick={onReset}
        className="rounded-md border px-4 py-2 text-sm"
      >
        Reset
      </button>

      <button
        type="button"
        onClick={onSave}
        disabled={isSaving}
        className="rounded-md border bg-primary px-4 py-2 text-sm text-primary-foreground disabled:opacity-50"
      >
        {isSaving ? "Saving..." : "Save Configuration"}
      </button>
    </div>
  )
}
