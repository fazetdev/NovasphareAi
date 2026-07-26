import { Card } from "@/components/ui/card"

const conversations = [
  {
    id: "1",
    channel: "WhatsApp",
    summary: "Customer requested pricing.",
    time: "Today",
  },
  {
    id: "2",
    channel: "Email",
    summary: "Proposal sent.",
    time: "Yesterday",
  },
]

export function ContactConversationsTab() {
  return (
    <div className="space-y-4">
      {conversations.map(
        (conversation) => (
          <Card
            key={conversation.id}
            className="p-4"
          >
            <h4 className="font-medium">
              {conversation.channel}
            </h4>

            <p className="mt-2 text-sm text-muted-foreground">
              {conversation.summary}
            </p>

            <p className="mt-2 text-xs text-muted-foreground">
              {conversation.time}
            </p>
          </Card>
        ),
      )}
    </div>
  )
}
