import { Card } from "@/components/ui/card"

interface OrganizationRelationshipCardProps {
  contacts: number
  aiAgents: number
  conversations: number
  automations: number
}

export function OrganizationRelationshipCard({
  contacts,
  aiAgents,
  conversations,
  automations,
}: OrganizationRelationshipCardProps) {
  const metrics = [
    {
      label: "Contacts",
      value: contacts,
    },
    {
      label: "AI Agents",
      value: aiAgents,
    },
    {
      label: "Conversations",
      value: conversations,
    },
    {
      label: "Automations",
      value: automations,
    },
  ]

  return (
    <Card className="p-6">
      <h3 className="mb-4 text-lg font-semibold">
        Relationship Summary
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <p className="text-xs text-muted-foreground">
              {metric.label}
            </p>

            <p className="text-2xl font-semibold">
              {metric.value}
            </p>
          </div>
        ))}
      </div>
    </Card>
  )
}
