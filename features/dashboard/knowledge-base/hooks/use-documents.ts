"use client"

import { useEffect, useState } from "react"

import type { Document } from "../types/documents"
import { getDocuments } from "../services/document-service"

export function useDocuments() {
  const [documents, setDocuments] = useState<Document[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showArchived, setShowArchived] = useState(false)

  useEffect(() => {
    async function loadDocuments() {
      try {
        const result = await getDocuments()
        setDocuments(result)
      } catch {
        setError("Failed to load documents.")
      } finally {
        setIsLoading(false)
      }
    }

    void loadDocuments()
  }, [])

  function addDocument(document: Document) {
    setDocuments((current) => [
      document,
      ...current,
    ])
  }

  function renameDocument(id: string, name: string) {
    if (!name.trim()) return

    setDocuments((current) =>
      current.map((document) =>
        document.id === id
          ? {
              ...document,
              name: name.trim(),
            }
          : document
      )
    )
  }

  function deleteDocument(id: string) {
    setDocuments((current) =>
      current.filter(
        (document) => document.id !== id
      )
    )
  }

  function archiveDocument(id: string) {
    setDocuments((current) =>
      current.map((document) =>
        document.id === id
          ? {
              ...document,
              archived: true,
            }
          : document
      )
    )
  }

  function unarchiveDocument(id: string) {
    setDocuments((current) =>
      current.map((document) =>
        document.id === id
          ? {
              ...document,
              archived: false,
            }
          : document
      )
    )
  }

  const visibleDocuments = documents.filter(
    (document) =>
      document.archived === showArchived
  )

  return {
    documents: visibleDocuments,
    addDocument,
    isLoading,
    error,
    showArchived,
    setShowArchived,
    renameDocument,
    deleteDocument,
    archiveDocument,
    unarchiveDocument,
  }
}
