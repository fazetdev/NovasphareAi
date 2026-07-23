export type UploadStatus =
  | "idle"
  | "validating"
  | "uploading"
  | "processing"
  | "success"
  | "error"

export type UploadItem = {
  id: string
  file: File
  progress: number
  status: UploadStatus
  error?: string
}

export type UploadConfig = {
  maxSizeMB: number
  acceptedTypes: string[]
}
