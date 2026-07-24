export function AIUsageMetrics() {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Usage Overview
      </h3>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-sm text-muted-foreground">
            Requests
          </p>
          <p className="font-medium">
            —
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Tokens
          </p>
          <p className="font-medium">
            —
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Active Models
          </p>
          <p className="font-medium">
            —
          </p>
        </div>
      </div>
    </section>
  )
}
