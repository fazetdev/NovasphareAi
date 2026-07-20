"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useUploadManager } from "../hooks/use-upload-manager"

export function UploadZone() {
  const { items, addFile } = useUploadManager()

  function handleMockUpload() {
    const file = new File(["demo"], "sample.pdf")
    addFile(file)
  }

  return (
    <div className="space-y-4">
      <Card className="p-6 border-dashed border-2">
        <div className="text-center space-y-2">
          <p className="text-sm font-medium">Upload documents</p>
          <p className="text-xs text-muted-foreground">
            PDF, DOCX, TXT, Markdown
          </p>

          <Button onClick={handleMockUpload}>
            Select File
          </Button>
        </div>
      </Card>

      {items.length > 0 && (
        <div className="space-y-2">
          {items.map((item) => (
            <Card key={item.id} className="p-3">
              <div className="flex justify-between text-sm">
                <span>{item.file.name}</span>
                <span className="text-xs text-muted-foreground">
                  {item.status} ({item.progress}%)
                </span>
              </div>

              <div className="mt-2 h-1 bg-muted rounded">
                <div
                  className="h-1 bg-primary rounded transition-all"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
