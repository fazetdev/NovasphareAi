export function AIStructuredResponse() {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Structured Output
      </h3>

      <pre className="mt-4 min-h-40 overflow-auto rounded-md border bg-muted/30 p-4 text-sm">
        {"{\n  \"response\": \"waiting\"\n}"}
      </pre>
    </section>
  )
}
