"use client"

import { useRef } from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { useUploadManager } from "../hooks/use-upload-manager"
import type { Document } from "../types/documents"

type Props = {
  onUploaded?: (document: Document) => void
}

export function UploadZone({
  onUploaded,
}: Props) {
  const { items, addFile } = useUploadManager()

  const inputRef =
    useRef<HTMLInputElement>(null)

  async function handleFiles(
    files: FileList | null
  ) {
    if (!files) return

    for (const file of Array.from(files)) {
      const status = await addFile(file)

      if (status === "success") {
        onUploaded?.({
          id: crypto.randomUUID(),
          name: file.name,
          type:
            file.name.split(".").pop()?.toUpperCase() ??
            "FILE",
          size: file.size,
          status: "ready",
          createdAt: new Date().toISOString(),
          archived: false,
        })
      }
    }
  }

  return (
    <div className="space-y-4">
      <Card className="border-dashed border-2 p-6">
        <div className="space-y-2 text-center">
          <p className="text-sm font-medium">
            Upload documents
          </p>

          <p className="text-xs text-muted-foreground">
            PDF, DOCX, TXT, Markdown
            (Max 10MB)
          </p>

          <input
            ref={inputRef}
            type="file"
            multiple
            accept=".pdf,.docx,.txt,.md"
            className="hidden"
            onChange={(e) =>
              void handleFiles(e.target.files)
            }
          />

          <Button
            onClick={() =>
              inputRef.current?.click()
            }
          >
            Select File
          </Button>
        </div>
      </Card>

      {items.length > 0 && (
        <div className="space-y-2">
          {items.map((item) => (
            <Card
              key={item.id}
              className="p-3"
            >
              <div className="flex justify-between text-sm">
                <span className="truncate">
                  {item.file.name}
                </span>

                <span className="text-xs text-muted-foreground">
                  {item.status} {item.progress}%
                </span>
              </div>

              {item.error && (
                <p className="mt-1 text-xs text-destructive">
                  {item.error}
                </p>
              )}

              <div className="mt-2 h-1 rounded bg-muted">
                <div
                  className="h-1 rounded bg-primary transition-all"
                  style={{
                    width: `${item.progress}%`,
                  }}
                />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
