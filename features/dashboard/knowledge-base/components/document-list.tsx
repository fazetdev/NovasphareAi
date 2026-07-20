import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Document } from "../types/documents"

type Props = {
  documents?: Document[]
}

export function DocumentList({ documents = [] }: Props) {
  if (documents.length === 0) {
    return (
      <Card className="p-4">
        <p className="text-sm text-muted-foreground">
          No documents uploaded yet.
        </p>
      </Card>
    )
  }

  return (
    <div className="space-y-3">
      {documents.map((doc) => (
        <Card key={doc.id} className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">{doc.name}</p>
            <p className="text-xs text-muted-foreground">
              {doc.type} • {(doc.size / 1024).toFixed(1)} KB
            </p>
          </div>

          <Badge
            variant={
              doc.status === "ready"
                ? "success"
                : doc.status === "processing"
                ? "warning"
                : "destructive"
            }
          >
            {doc.status}
          </Badge>
        </Card>
      ))}
    </div>
  )
}
