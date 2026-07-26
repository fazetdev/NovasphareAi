import { Card } from "@/components/ui/card"

export interface ContactRelationship {
  id: string
  contactName: string
  organizationName: string
  role: string
  strength: "low" | "medium" | "high"
}

interface RelationshipCardProps {
  relationship: ContactRelationship
}

export function RelationshipCard({
  relationship,
}: RelationshipCardProps) {
  return (
    <Card className="p-4">
      <div className="space-y-3">
        <div>
          <h4 className="font-medium">
            {relationship.contactName}
          </h4>

          <p className="text-sm text-muted-foreground">
            {relationship.organizationName}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm">
            {relationship.role}
          </span>

          <span className="text-xs uppercase text-muted-foreground">
            {relationship.strength}
          </span>
        </div>
      </div>
    </Card>
  )
}
