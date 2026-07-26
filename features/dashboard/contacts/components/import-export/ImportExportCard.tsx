import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ImportExportCardProps {
  title: string
  description: string
  action: string
}

export function ImportExportCard({
  title,
  description,
  action,
}: ImportExportCardProps) {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {description}
          </p>
        </div>

        <Button>
          {action}
        </Button>
      </div>
    </Card>
  )
}
