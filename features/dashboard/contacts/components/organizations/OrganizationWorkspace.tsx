import { OrganizationRelationshipCard } from "./OrganizationRelationshipCard"
import { OrganizationsTab } from "./OrganizationsTab"

export function OrganizationWorkspace() {
  return (
    <div className="space-y-6">
      <OrganizationRelationshipCard
        contacts={27}
        aiAgents={4}
        conversations={186}
        automations={8}
      />

      <OrganizationsTab />
    </div>
  )
}
