import {
  OrganizationOverviewCard,
  type OrganizationOverview,
} from "./OrganizationOverviewCard"

const organizations: OrganizationOverview[] = [
  {
    id: "1",
    name: "Acme Ltd",
    industry: "Technology",
    contactCount: 18,
    activeDeals: 4,
  },
  {
    id: "2",
    name: "Nova Trading",
    industry: "Retail",
    contactCount: 9,
    activeDeals: 2,
  },
]

export function OrganizationsTab() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {organizations.map(
        (organization) => (
          <OrganizationOverviewCard
            key={organization.id}
            organization={
              organization
            }
          />
        ),
      )}
    </div>
  )
}
