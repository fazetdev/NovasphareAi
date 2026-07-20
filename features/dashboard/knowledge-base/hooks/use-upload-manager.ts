"use client"

import { useState } from "react"
import type { UploadItem, UploadStatus } from "../types/upload"

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function useUploadManager() {
  const [items, setItems] = useState<UploadItem[]>([])

  async function addFile(file: File) {
    const id = crypto.randomUUID()

    const newItem: UploadItem = {
      id,
      file,
      progress: 0,
      status: "uploading",
    }

    setItems((prev) => [...prev, newItem])

    // Simulated upload progression (frontend-only)
    for (let p = 10; p <= 100; p += 10) {
      await sleep(120)

      setItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, progress: p }
            : item
        )
      )
    }

    // Simulate final state
    const finalStatus: UploadStatus =
      Math.random() > 0.2 ? "success" : "error"

    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: finalStatus }
          : item
      )
    )
  }

  return {
    items,
    addFile,
  }
}
