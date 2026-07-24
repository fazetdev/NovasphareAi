export function AIComparisonResults() {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Comparison Results
      </h3>

      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <div className="rounded-md border p-4">
          <p className="text-sm text-muted-foreground">
            Model A Response
          </p>

          <p className="mt-2 text-sm">
            Waiting for execution...
          </p>
        </div>

        <div className="rounded-md border p-4">
          <p className="text-sm text-muted-foreground">
            Model B Response
          </p>

          <p className="mt-2 text-sm">
            Waiting for execution...
          </p>
        </div>
      </div>
    </section>
  )
}
