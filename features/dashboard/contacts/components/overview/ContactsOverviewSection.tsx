import { Card } from "@/components/ui/card"

export function ContactsOverviewSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <Card className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground">
          Total Contacts
        </h3>

        <p className="mt-2 text-3xl font-bold">
          --
        </p>
      </Card>

      <Card className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground">
          Organizations
        </h3>

        <p className="mt-2 text-3xl font-bold">
          --
        </p>
      </Card>

      <Card className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground">
          Active Relationships
        </h3>

        <p className="mt-2 text-3xl font-bold">
          --
        </p>
      </Card>

      <Card className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground">
          Segments
        </h3>

        <p className="mt-2 text-3xl font-bold">
          --
        </p>
      </Card>
    </div>
  )
}
