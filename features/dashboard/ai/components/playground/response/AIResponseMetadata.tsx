export function AIResponseMetadata() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-lg border p-4">
        <p className="text-sm text-muted-foreground">
          Model
        </p>
        <p className="font-medium">
          —
        </p>
      </div>

      <div className="rounded-lg border p-4">
        <p className="text-sm text-muted-foreground">
          Tokens
        </p>
        <p className="font-medium">
          —
        </p>
      </div>

      <div className="rounded-lg border p-4">
        <p className="text-sm text-muted-foreground">
          Latency
        </p>
        <p className="font-medium">
          —
        </p>
      </div>

      <div className="rounded-lg border p-4">
        <p className="text-sm text-muted-foreground">
          Status
        </p>
        <p className="font-medium">
          Waiting
        </p>
      </div>
    </div>
  )
}
