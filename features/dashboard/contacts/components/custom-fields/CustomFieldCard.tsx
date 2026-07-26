import { Card } from "@/components/ui/card"

export interface CustomField {
  id: string
  name: string
  type: string
  required: boolean
}

interface CustomFieldCardProps {
  field: CustomField
}

export function CustomFieldCard({
  field,
}: CustomFieldCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium">
            {field.name}
          </h4>

          <p className="text-sm text-muted-foreground">
            {field.type}
          </p>
        </div>

        <span className="text-xs text-muted-foreground">
          {field.required
            ? "Required"
            : "Optional"}
        </span>
      </div>
    </Card>
  )
}
