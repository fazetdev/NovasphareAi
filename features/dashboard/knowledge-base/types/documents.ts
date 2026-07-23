export type DocumentStatus =
  | "processing"
  | "ready"
  | "failed"

export type Document = {
  id: string
  name: string
  type: string
  size: number
  status: DocumentStatus
  createdAt: string
  archived: boolean
}
