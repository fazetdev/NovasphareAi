"use client"

export function AutomationLoading() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-8 w-64 rounded bg-muted" />

      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-md border p-4"
          >
            <div className="h-5 w-32 rounded bg-muted" />

            <div className="mt-3 h-4 w-full rounded bg-muted" />

            <div className="mt-2 h-4 w-2/3 rounded bg-muted" />
          </div>
        ))}
      </div>
    </div>
  )
}
