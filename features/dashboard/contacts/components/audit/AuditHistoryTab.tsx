import {
  AuditHistoryCard,
  type AuditEntry,
} from "./AuditHistoryCard"

const entries: AuditEntry[] = [
  {
    id: "1",
    action: "Contact created",
    actor: "Sarah Ahmed",
    timestamp: "Today",
  },
  {
    id: "2",
    action: "Status updated",
    actor: "AI Agent",
    timestamp: "Yesterday",
  },
  {
    id: "3",
    action: "Organisation assigned",
    actor: "Admin",
    timestamp: "2 days ago",
  },
]

export function AuditHistoryTab() {
  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <AuditHistoryCard
          key={entry.id}
          entry={entry}
        />
      ))}
    </div>
  )
}
