export function AIExecutionControls() {
  return (
    <section className="rounded-lg border p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-semibold">
            Execution
          </h3>

          <p className="text-sm text-muted-foreground">
            Run prompts against the selected model.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-md border px-4 py-2 text-sm"
          >
            Clear
          </button>

          <button
            type="button"
            className="rounded-md border bg-primary px-4 py-2 text-sm text-primary-foreground"
          >
            Run Prompt
          </button>
        </div>
      </div>
    </section>
  )
}
