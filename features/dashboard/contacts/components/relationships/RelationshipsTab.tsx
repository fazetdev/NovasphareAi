import {
  RelationshipCard,
  type ContactRelationship,
} from "./RelationshipCard"

import { RelationshipGraph } from "./RelationshipGraph"

const relationships: ContactRelationship[] = [
  {
    id: "1",
    contactName: "Ahmed Hassan",
    organizationName: "Nova Trading",
    role: "Procurement Manager",
    strength: "high",
  },
  {
    id: "2",
    contactName: "Fatima Ali",
    organizationName: "Acme Ltd",
    role: "Operations Lead",
    strength: "medium",
  },
]

export function RelationshipsTab() {
  return (
    <div className="space-y-6">
      <RelationshipGraph />

      <div className="grid gap-4">
        {relationships.map(
          (relationship) => (
            <RelationshipCard
              key={relationship.id}
              relationship={
                relationship
              }
            />
          ),
        )}
      </div>
    </div>
  )
}
