import { PageContainer } from "@/components/layout/page-container"
import { Card } from "@/components/ui/card"

import { DocumentList } from "./document-list"
import { UploadZone } from "./upload-zone"

export function KnowledgeBaseView() {
  const mockDocuments = [
    {
      id: "1",
      name: "Company Policy.pdf",
      type: "PDF",
      size: 204800,
      status: "ready" as const,
      createdAt: "2026-01-01",
    },
    {
      id: "2",
      name: "Onboarding.docx",
      type: "DOCX",
      size: 102400,
      status: "processing" as const,
      createdAt: "2026-01-02",
    },
  ]

  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-lg font-semibold">Knowledge Base</h1>
        <p className="text-sm text-muted-foreground">
          Manage your uploaded business documents.
        </p>
      </div>

      <div className="mb-6">
        <UploadZone />
      </div>

      <div className="mb-4">
        <Card className="p-4 text-sm text-muted-foreground">
          Uploads will be processed and appear in the document list.
        </Card>
      </div>

      <DocumentList documents={mockDocuments} />
    </PageContainer>
  )
}
