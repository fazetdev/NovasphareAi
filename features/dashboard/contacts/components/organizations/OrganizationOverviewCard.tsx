import { Card } from "@/components/ui/card"

export interface OrganizationOverview {
  id: string
  name: string
  industry: string
  contactCount: number
  activeDeals: number
}

interface OrganizationOverviewCardProps {
  organization: OrganizationOverview
}

export function OrganizationOverviewCard({
  organization,
}: OrganizationOverviewCardProps) {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">
            {organization.name}
          </h3>

          <p className="text-sm text-muted-foreground">
            {organization.industry}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground">
              Contacts
            </p>

            <p className="text-xl font-semibold">
              {organization.contactCount}
            </p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">
              Active Deals
            </p>

            <p className="text-xl font-semibold">
              {organization.activeDeals}
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}
