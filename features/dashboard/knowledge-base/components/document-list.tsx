import { EmptyState } from "@/components/ui/EmptyState"
import { FileText } from "lucide-react"

import type { Document } from "../types/documents"

import { DocumentCard } from "./document-card"

type Props = {
  documents?: Document[]
  onRename?: (id: string, name: string) => void
  onDelete?: (id: string) => void
  onArchive?: (id: string) => void
}

export function DocumentList({
  documents = [],
  onRename,
  onDelete,
  onArchive,
}: Props) {
  if (documents.length === 0) {
    return (
      <EmptyState
        icon={FileText}
        title="No documents"
        description="No documents available in this section."
      />
    )
  }

  return (
    <div className="space-y-3">
      {documents.map((document) => (
        <DocumentCard
          key={document.id}
          document={document}
          onRename={onRename}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ))}
    </div>
  )
}
