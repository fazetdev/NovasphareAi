export function AIOverviewQuickActions() {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Quick Actions
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        Common AI workspace operations.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          className="rounded-md border px-4 py-2 text-sm"
        >
          Add Provider
        </button>

        <button
          type="button"
          className="rounded-md border px-4 py-2 text-sm"
        >
          Register Model
        </button>

        <button
          type="button"
          className="rounded-md border px-4 py-2 text-sm"
        >
          Open Playground
        </button>

        <button
          type="button"
          className="rounded-md border px-4 py-2 text-sm"
        >
          Edit Configuration
        </button>
      </div>
    </section>
  )
}
