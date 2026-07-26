import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ContactsBulkActionsProps {
  selectedCount: number
}

export function ContactsBulkActions({
  selectedCount,
}: ContactsBulkActionsProps) {
  if (selectedCount === 0) {
    return null
  }

  return (
    <Card className="mb-6 flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:justify-between">
      <p className="text-sm text-muted-foreground">
        {selectedCount} contact
        {selectedCount === 1 ? "" : "s"} selected
      </p>

      <div className="flex flex-wrap gap-2">
        <Button variant="outline">
          Assign Owner
        </Button>

        <Button variant="outline">
          Add to Segment
        </Button>

        <Button variant="outline">
          Export
        </Button>

        <Button variant="outline">
          Archive
        </Button>

        <Button variant="destructive">
          Delete
        </Button>
      </div>
    </Card>
  )
}
