"use client"

import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import type { Document } from "../types/documents"

import { DeleteDocumentDialog } from "./dialogs/delete-document-dialog"

type Props = {
  document: Document
  onRename?: (id: string, name: string) => void
  onDelete?: (id: string) => void
  onArchive?: (id: string) => void
}

export function DocumentCard({
  document,
  onRename,
  onDelete,
  onArchive,
}: Props) {
  const [editing, setEditing] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [name, setName] = useState(document.name)

  useEffect(() => {
    setName(document.name)
  }, [document.name])

  function saveRename() {
    if (!name.trim()) return
    onRename?.(document.id, name.trim())
    setEditing(false)
  }

  function cancelRename() {
    setName(document.name)
    setEditing(false)
  }

  return (
    <>
      <Card className="p-3">
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1 space-y-1">
              {editing ? (
                <div className="flex items-center gap-1.5">
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") saveRename()
                      if (e.key === "Escape") cancelRename()
                    }}
                    autoFocus
                    className="h-8 text-xs min-w-0 flex-1"
                  />
                  <Button
                    size="sm"
                    className="h-8 px-2 text-xs shrink-0"
                    onClick={saveRename}
                  >
                    Save
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-8 px-2 text-xs shrink-0"
                    onClick={cancelRename}
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <p className="truncate font-medium text-foreground text-sm">
                  {document.name}
                </p>
              )}

              <p className="text-xs text-muted-foreground">
                {document.type} • {(document.size / 1024).toFixed(1)} KB
              </p>
            </div>

            <Badge
              variant={document.archived ? "secondary" : "default"}
              className="shrink-0 text-[10px] px-1.5 py-0.5"
            >
              {document.archived ? "Archived" : document.status}
            </Badge>
          </div>

          {!editing && (
            <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-border/40 w-full">
              <Button
                size="sm"
                variant="outline"
                className="h-8 w-full text-[11px] px-1 shrink-0"
                disabled={document.archived}
                onClick={() => setEditing(true)}
              >
                Rename
              </Button>

              <Button
                size="sm"
                variant="outline"
                className="h-8 w-full text-[11px] px-1 shrink-0"
                onClick={() => onArchive?.(document.id)}
              >
                {document.archived ? "Unarchive" : "Archive"}
              </Button>

              <Button
                size="sm"
                variant="destructive"
                className="h-8 w-full text-[11px] px-1 shrink-0"
                onClick={() => setDeleteOpen(true)}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
      </Card>

      <DeleteDocumentDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        documentName={document.name}
        onConfirm={() => {
          onDelete?.(document.id)
          setDeleteOpen(false)
        }}
      />
    </>
  )
}
