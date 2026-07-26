import { Card } from "@/components/ui/card"

export interface ContactOwnership {
  owner: string
  team: string
  role: string
}

interface OwnershipCardProps {
  ownership: ContactOwnership
}

export function OwnershipCard({
  ownership,
}: OwnershipCardProps) {
  return (
    <Card className="p-6">
      <h3 className="mb-4 text-lg font-semibold">
        Ownership
      </h3>

      <dl className="space-y-3">
        <div className="flex justify-between">
          <dt className="text-sm text-muted-foreground">
            Owner
          </dt>

          <dd>{ownership.owner}</dd>
        </div>

        <div className="flex justify-between">
          <dt className="text-sm text-muted-foreground">
            Team
          </dt>

          <dd>{ownership.team}</dd>
        </div>

        <div className="flex justify-between">
          <dt className="text-sm text-muted-foreground">
            Role
          </dt>

          <dd>{ownership.role}</dd>
        </div>
      </dl>
    </Card>
  )
}
