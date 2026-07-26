import {
  OwnershipCard,
  type ContactOwnership,
} from "./OwnershipCard"

const ownership: ContactOwnership = {
  owner: "Sarah Ahmed",
  team: "Sales",
  role: "Account Manager",
}

export function PermissionsTab() {
  return (
    <OwnershipCard
      ownership={ownership}
    />
  )
}
