"use client"

import { useState } from "react"

import type { UploadItem } from "../types/upload"
import { uploadFile } from "../services/upload-service"

export function useUploadManager() {
  const [items, setItems] = useState<UploadItem[]>([])

  async function addFile(file: File) {
    const id = crypto.randomUUID()

    const newItem: UploadItem = {
      id,
      file,
      progress: 0,
      status: "validating",
    }

    setItems((prev) => [...prev, newItem])

    try {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, status: "uploading" }
            : item
        )
      )

      const status = await uploadFile(file, {
        onProgress(progress) {
          setItems((prev) =>
            prev.map((item) =>
              item.id === id
                ? {
                    ...item,
                    progress,
                  }
                : item
            )
          )
        },
      })

      setItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                status,
              }
            : item
        )
      )

      return status
    } catch (error) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                status: "error",
                error:
                  error instanceof Error
                    ? error.message
                    : "Upload failed.",
              }
            : item
        )
      )

      return "error"
    }
  }

  return {
    items,
    addFile,
  }
}
