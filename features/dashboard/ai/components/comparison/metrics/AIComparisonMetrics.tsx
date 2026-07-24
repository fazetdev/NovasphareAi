export function AIComparisonMetrics() {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Performance Metrics
      </h3>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-sm text-muted-foreground">
            Latency
          </p>
          <p className="font-medium">
            —
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Tokens Used
          </p>
          <p className="font-medium">
            —
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Cost Estimate
          </p>
          <p className="font-medium">
            —
          </p>
        </div>
      </div>
    </section>
  )
}
