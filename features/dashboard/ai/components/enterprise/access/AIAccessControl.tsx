export function AIAccessControl() {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Access Control
      </h3>

      <div className="mt-4 space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">
            Roles
          </p>
          <p className="font-medium">
            Admin, Developer, Viewer
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Permissions
          </p>
          <p className="font-medium">
            Configurable
          </p>
        </div>
      </div>
    </section>
  )
}
