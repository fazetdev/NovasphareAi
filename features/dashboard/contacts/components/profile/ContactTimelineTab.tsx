import {
  ContactTimelineEvent,
  type ContactTimelineEventData,
} from "./ContactTimelineEvent"

const mockEvents: ContactTimelineEventData[] = [
  {
    id: "1",
    title: "Contact Created",
    description:
      "Contact was added to the CRM.",
    timestamp: "Today • 09:30",
    source: "crm",
  },
  {
    id: "2",
    title: "AI Conversation",
    description:
      "AI Agent handled a customer enquiry.",
    timestamp: "Yesterday • 14:10",
    source: "ai",
  },
  {
    id: "3",
    title: "Knowledge Updated",
    description:
      "Knowledge Base document linked.",
    timestamp: "2 days ago",
    source: "knowledge-base",
  },
]

export function ContactTimelineTab() {
  return (
    <div className="space-y-4">
      {mockEvents.map((event) => (
        <ContactTimelineEvent
          key={event.id}
          event={event}
        />
      ))}
    </div>
  )
}
