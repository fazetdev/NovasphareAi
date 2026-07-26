import { Card } from "@/components/ui/card"

export function ContactAIInsightsTab() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold">
        AI Insights
      </h3>

      <div className="mt-4 space-y-3 text-sm text-muted-foreground">
        <p>
          • Customer sentiment analysis
        </p>

        <p>
          • Lead score prediction
        </p>

        <p>
          • Recommended next action
        </p>

        <p>
          • Conversation summary
        </p>

        <p>
          • Opportunity risk analysis
        </p>
      </div>
    </Card>
  )
}
