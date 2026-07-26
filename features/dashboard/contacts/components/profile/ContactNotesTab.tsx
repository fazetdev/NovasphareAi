import {
  ContactNoteCard,
  type ContactNote,
} from "./ContactNoteCard"

const mockNotes: ContactNote[] = [
  {
    id: "1",
    title: "Discovery Call",
    content:
      "Discussed business requirements and integration timeline.",
    author: "Admin",
    createdAt: "Today",
  },
  {
    id: "2",
    title: "Follow-up",
    content:
      "Requested pricing proposal and product demo.",
    author: "Sales",
    createdAt: "Yesterday",
  },
]

export function ContactNotesTab() {
  return (
    <div className="space-y-4">
      {mockNotes.map((note) => (
        <ContactNoteCard
          key={note.id}
          note={note}
        />
      ))}
    </div>
  )
}
