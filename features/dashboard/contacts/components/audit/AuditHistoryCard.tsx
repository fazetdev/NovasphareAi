import { Card } from "@/components/ui/card"

export interface AuditEntry {
  id: string
  action: string
  actor: string
  timestamp: string
}

interface AuditHistoryCardProps {
  entry: AuditEntry
}

export function AuditHistoryCard({
  entry,
}: AuditHistoryCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-medium">
            {entry.action}
          </h4>

          <p className="mt-1 text-sm text-muted-foreground">
            {entry.actor}
          </p>
        </div>

        <span className="text-xs text-muted-foreground">
          {entry.timestamp}
        </span>
      </div>
    </Card>
  )
}
