import { Card } from "@/components/ui/card"

import type { Contact } from "../../types"

interface ContactOverviewTabProps {
  contact: Contact
}

export function ContactOverviewTab({
  contact,
}: ContactOverviewTabProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="p-6">
        <h3 className="mb-4 text-lg font-semibold">
          Contact Details
        </h3>

        <dl className="space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted-foreground">
              Name
            </dt>

            <dd>{contact.displayName}</dd>
          </div>

          <div className="flex justify-between">
            <dt className="text-muted-foreground">
              Status
            </dt>

            <dd>{contact.status}</dd>
          </div>

          <div className="flex justify-between">
            <dt className="text-muted-foreground">
              Lifecycle
            </dt>

            <dd>{contact.lifecycleStage}</dd>
          </div>

          <div className="flex justify-between">
            <dt className="text-muted-foreground">
              Tags
            </dt>

            <dd>
              {contact.tags.length
                ? contact.tags.join(", ")
                : "—"}
            </dd>
          </div>
        </dl>
      </Card>

      <Card className="p-6">
        <h3 className="mb-4 text-lg font-semibold">
          AI Relationship Summary
        </h3>

        <p className="text-sm text-muted-foreground">
          AI-generated summaries,
          communication insights,
          sentiment, and recommended
          next actions will appear here.
        </p>
      </Card>

      <Card className="p-6 lg:col-span-2">
        <h3 className="mb-4 text-lg font-semibold">
          Recent Activity
        </h3>

        <p className="text-sm text-muted-foreground">
          Timeline events from Chats,
          Knowledge Base, AI Agents,
          Automations, and CRM actions
          will be displayed here.
        </p>
      </Card>
    </div>
  )
}
