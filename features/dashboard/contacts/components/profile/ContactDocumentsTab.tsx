import { Card } from "@/components/ui/card"

const documents = [
  {
    id: "1",
    name: "Proposal.pdf",
    uploaded: "Today",
  },
  {
    id: "2",
    name: "Contract.docx",
    uploaded: "Last week",
  },
]

export function ContactDocumentsTab() {
  return (
    <div className="space-y-4">
      {documents.map((document) => (
        <Card
          key={document.id}
          className="p-4"
        >
          <h4 className="font-medium">
            {document.name}
          </h4>

          <p className="mt-2 text-sm text-muted-foreground">
            Uploaded {document.uploaded}
          </p>
        </Card>
      ))}
    </div>
  )
}
