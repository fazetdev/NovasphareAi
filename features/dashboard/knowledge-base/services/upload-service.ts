import type { UploadStatus } from "../types/upload"

type UploadOptions = {
  onProgress?: (progress: number) => void
}

const MAX_SIZE_MB = 10

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "text/markdown",
]

export function validateFile(file: File) {
  if (!ACCEPTED_TYPES.includes(file.type)) {
    throw new Error("Unsupported file type.")
  }

  if (file.size > MAX_SIZE_MB * 1024 * 1024) {
    throw new Error(`File size must be below ${MAX_SIZE_MB}MB.`)
  }

  return true
}

export async function uploadFile(
  file: File,
  options?: UploadOptions
): Promise<UploadStatus> {
  validateFile(file)

  // API integration point
  // Replace this with real upload request later.

  for (let progress = 10; progress <= 100; progress += 10) {
    await new Promise((resolve) =>
      setTimeout(resolve, 100)
    )

    options?.onProgress?.(progress)
  }

  return "success"
}
