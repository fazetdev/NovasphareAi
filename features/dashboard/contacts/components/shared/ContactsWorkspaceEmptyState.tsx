import { EmptyState } from "@/components/ui/EmptyState"

export function ContactsWorkspaceEmptyState() {
  return (
    <EmptyState
      title="No contacts yet"
      description="Create contacts or import existing records to start building your relationship intelligence workspace."
    />
  )
}
