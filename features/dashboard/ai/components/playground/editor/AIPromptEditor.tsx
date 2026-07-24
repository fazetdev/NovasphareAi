export function AIPromptEditor() {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Prompt
      </h3>

      <textarea
        readOnly
        placeholder="Enter a prompt to test your AI model..."
        className="mt-4 min-h-64 w-full rounded-md border bg-background p-3 text-sm"
      />
    </section>
  )
}
