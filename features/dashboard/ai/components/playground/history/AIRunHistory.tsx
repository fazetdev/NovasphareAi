export function AIRunHistory() {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Run History
      </h3>

      <div className="mt-4 rounded-md border p-4">
        <p className="text-sm text-muted-foreground">
          Previous prompt executions will appear here with model, provider,
          latency, token usage, and execution status.
        </p>
      </div>
    </section>
  )
}
