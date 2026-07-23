import type { Document } from "../types/documents"

const mockDocuments: Document[] = [
  {
    id: "1",
    name: "Company Policy.pdf",
    type: "PDF",
    size: 204800,
    status: "ready",
    createdAt: "2026-01-01",
    archived: false,
  },
  {
    id: "2",
    name: "Onboarding.docx",
    type: "DOCX",
    size: 102400,
    status: "processing",
    createdAt: "2026-01-02",
    archived: false,
  },
]

export async function getDocuments(): Promise<Document[]> {
  return mockDocuments
}
