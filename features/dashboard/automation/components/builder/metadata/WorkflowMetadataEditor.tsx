"use client"

import {
  useDraftContext,
} from "../DraftContext"

export function WorkflowMetadataEditor() {
  const {
    draft,
    updateDraft,
  } = useDraftContext()

  return (
    <div className="space-y-3">
      <input
        value={draft.name ?? ""}
        onChange={(event) =>
          updateDraft({
            name: event.target.value,
          })
        }
        className="w-full rounded-md border p-2 text-sm"
        placeholder="Workflow name"
      />

      <textarea
        value={draft.description ?? ""}
        onChange={(event) =>
          updateDraft({
            description: event.target.value,
          })
        }
        className="w-full rounded-md border p-2 text-sm"
        placeholder="Description"
      />

      <input
        value={(draft.tags ?? []).join(", ")}
        onChange={(event) =>
          updateDraft({
            tags: event.target.value
              .split(",")
              .map((tag) => tag.trim())
              .filter(Boolean),
          })
        }
        className="w-full rounded-md border p-2 text-sm"
        placeholder="Tags"
      />
    </div>
  )
}
