import { Card } from "@/components/ui/card"

export function RelationshipGraph() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold">
        Relationship Graph
      </h3>

      <p className="mt-4 text-sm text-muted-foreground">
        Interactive relationship
        visualization between contacts,
        organisations, conversations,
        AI agents, and automations will
        appear here.
      </p>
    </Card>
  )
}
