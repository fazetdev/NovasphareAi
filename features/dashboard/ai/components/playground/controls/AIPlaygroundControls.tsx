interface AIPlaygroundControlsProps {
  isExecuting: boolean
}

export function AIPlaygroundControls({
  isExecuting,
}: AIPlaygroundControlsProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border p-4">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          className="rounded-md border px-4 py-2 text-sm"
        >
          New Session
        </button>

        <button
          type="button"
          className="rounded-md border px-4 py-2 text-sm"
        >
          Duplicate
        </button>

        <button
          type="button"
          className="rounded-md border px-4 py-2 text-sm"
        >
          Clear
        </button>
      </div>

      <button
        type="button"
        disabled={isExecuting}
        className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground disabled:opacity-50"
      >
        {isExecuting ? "Running..." : "Run Prompt"}
      </button>
    </div>
  )
}
