import { Card } from "@/components/ui/card"

export interface ContactTimelineEventData {
  id: string
  title: string
  description: string
  timestamp: string
  source:
    | "crm"
    | "chat"
    | "ai"
    | "knowledge-base"
    | "automation"
}

interface ContactTimelineEventProps {
  event: ContactTimelineEventData
}

export function ContactTimelineEvent({
  event,
}: ContactTimelineEventProps) {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h4 className="font-medium">
            {event.title}
          </h4>

          <p className="text-sm text-muted-foreground">
            {event.description}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs font-medium uppercase text-muted-foreground">
            {event.source}
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            {event.timestamp}
          </p>
        </div>
      </div>
    </Card>
  )
}
