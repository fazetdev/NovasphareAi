import type { PlaygroundSession } from "../../../types"

interface AIPlaygroundHistoryProps {
  sessions: PlaygroundSession[]
  isLoading: boolean
}

export function AIPlaygroundHistory({
  sessions,
  isLoading,
}: AIPlaygroundHistoryProps) {
  return (
    <section className="rounded-lg border p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          Session History
        </h3>

        <span className="text-sm text-muted-foreground">
          {sessions.length}
        </span>
      </div>

      {isLoading ? (
        <p className="mt-6 text-sm text-muted-foreground">
          Loading sessions...
        </p>
      ) : sessions.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">
          No playground sessions available.
        </p>
      ) : (
        <div className="mt-6 space-y-3">
          {sessions.map((session) => (
            <article
              key={session.id}
              className="rounded-md border p-4"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-medium">
                  {session.name}
                </h4>

                <span className="rounded-full border px-2 py-1 text-xs">
                  {session.status}
                </span>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                {session.modelId}
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                {session.updatedAt}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
