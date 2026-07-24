export function AICostMetrics() {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Cost Overview
      </h3>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-sm text-muted-foreground">
            Total Cost
          </p>
          <p className="font-medium">
            —
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Cost Per Request
          </p>
          <p className="font-medium">
            —
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Most Used Model
          </p>
          <p className="font-medium">
            —
          </p>
        </div>
      </div>
    </section>
  )
}
