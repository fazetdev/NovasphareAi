import { AIResponseMetadata } from "./AIResponseMetadata"
import { AIStructuredResponse } from "./AIStructuredResponse"

export function AIResponseViewer() {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Response
      </h3>

      <div className="mt-4">
        <AIResponseMetadata />
      </div>

      <div className="mt-6 min-h-64 rounded-md border bg-muted/30 p-4">
        <p className="text-sm text-muted-foreground">
          AI responses will appear here after execution.
        </p>
      </div>

      <div className="mt-6">
        <AIStructuredResponse />
      </div>
    </section>
  )
}
