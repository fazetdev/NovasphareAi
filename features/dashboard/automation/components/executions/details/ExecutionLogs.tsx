"use client"

export function ExecutionLogs({
  logs,
}: {
  logs: string[]
}) {
  if (!logs.length) {
    return (
      <div className="text-sm text-muted-foreground">
        No execution logs available.
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <h4 className="font-medium">
        Logs
      </h4>

      {logs.map((log, index) => (
        <div
          key={index}
          className="rounded-md border p-2 text-sm"
        >
          {log}
        </div>
      ))}
    </div>
  )
}
