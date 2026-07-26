import { Card } from "@/components/ui/card"

export interface ContactNote {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
}

interface ContactNoteCardProps {
  note: ContactNote
}

export function ContactNoteCard({
  note,
}: ContactNoteCardProps) {
  return (
    <Card className="p-4">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-medium">
            {note.title}
          </h4>

          <span className="text-xs text-muted-foreground">
            {note.createdAt}
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          {note.content}
        </p>

        <p className="text-xs text-muted-foreground">
          By {note.author}
        </p>
      </div>
    </Card>
  )
}
