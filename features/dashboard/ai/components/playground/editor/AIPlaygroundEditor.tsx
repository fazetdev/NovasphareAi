import type { PlaygroundSession } from "../../../types"

interface AIPlaygroundEditorProps {
  session: PlaygroundSession | null
}

export function AIPlaygroundEditor({
  session,
}: AIPlaygroundEditorProps) {
  return (
    <section className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">
        Prompt Editor
      </h3>

      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium">
            System Prompt
          </label>

          <textarea
            readOnly
            rows={4}
            value={session?.prompt.systemPrompt ?? ""}
            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            User Prompt
          </label>

          <textarea
            readOnly
            rows={8}
            value={session?.prompt.userPrompt ?? ""}
            className="w-full rounded-md border bg-background px-3 py-2 text-sm"
          />
        </div>
      </div>
    </section>
  )
}
