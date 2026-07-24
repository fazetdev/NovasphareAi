export function AISecuritySettings() {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg-semibold">
        Security Settings
      </h3>

      <div className="mt-4 space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">
            API Key Management
          </p>
          <p className="font-medium">
            Managed securely
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Data Protection
          </p>
          <p className="font-medium">
            Enabled
          </p>
        </div>
      </div>
    </section>
  )
}
