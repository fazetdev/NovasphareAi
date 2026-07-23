"use client"

import { PageContainer } from "@/components/layout/page-container"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ErrorState } from "@/components/ui/ErrorState"
import { Skeleton } from "@/components/ui/Skeleton"

import { useDocuments } from "../hooks/use-documents"

import { DocumentList } from "./document-list"
import { UploadZone } from "./upload-zone"

export function KnowledgeBaseView() {
  const {
    documents,
    addDocument,
    isLoading,
    error,
    showArchived,
    setShowArchived,
    renameDocument,
    deleteDocument,
    archiveDocument,
    unarchiveDocument,
  } = useDocuments()

  return (
    <PageContainer>
      <div className="mb-6">
        <h1 className="text-lg font-semibold">
          Knowledge Base
        </h1>

        <p className="text-sm text-muted-foreground">
          Manage your uploaded business documents.
        </p>
      </div>

      <div className="mb-6">
        <UploadZone
          onUploaded={addDocument}
        />
      </div>

      <div className="mb-4 flex gap-2">
        <Button
          variant={
            showArchived
              ? "outline"
              : "default"
          }
          onClick={() =>
            setShowArchived(false)
          }
        >
          Documents
        </Button>

        <Button
          variant={
            showArchived
              ? "default"
              : "outline"
          }
          onClick={() =>
            setShowArchived(true)
          }
        >
          Archived
        </Button>
      </div>

      <div className="mb-4">
        <Card className="p-4 text-sm text-muted-foreground">
          {showArchived
            ? "Archived documents"
            : "Active documents"}
        </Card>
      </div>

      {isLoading && <Skeleton />}

      {error && (
        <ErrorState
          title="Unable to load documents"
          description={error}
        />
      )}

      {!isLoading && !error && (
        <DocumentList
          documents={documents}
          onRename={renameDocument}
          onDelete={deleteDocument}
          onArchive={
            showArchived
              ? unarchiveDocument
              : archiveDocument
          }
        />
      )}
    </PageContainer>
  )
}
