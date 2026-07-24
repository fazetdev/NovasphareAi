export function AIEnvironmentManagement() {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Environments
      </h3>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-md border p-3">
          Development
        </div>

        <div className="rounded-md border p-3">
          Staging
        </div>

        <div className="rounded-md border p-3">
          Production
        </div>
      </div>
    </section>
  )
}
