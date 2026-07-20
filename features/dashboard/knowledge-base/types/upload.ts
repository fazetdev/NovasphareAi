export type UploadStatus =
  | "idle"
  | "uploading"
  | "success"
  | "error"

export type UploadItem = {
  id: string
  file: File
  progress: number
  status: UploadStatus
}
