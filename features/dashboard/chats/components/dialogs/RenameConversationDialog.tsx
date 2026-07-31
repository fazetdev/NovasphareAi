"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useTranslations } from "@/lib/i18n/hooks"

interface RenameConversationDialogProps {
  open: boolean
  initialValue: string
  onOpenChange: (open: boolean) => void
  onConfirm: (title: string) => void
}

export function RenameConversationDialog({
  open,
  initialValue,
  onOpenChange,
  onConfirm,
}: RenameConversationDialogProps) {
  const t = useTranslations()
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  function handleSubmit() {
    const title = value.trim()

    if (!title) return

    onConfirm(title)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {t.chat.renameConversation}
          </DialogTitle>

          <DialogDescription>
            {t.chat.renameConversationDescription}
          </DialogDescription>
        </DialogHeader>

        <Input
          autoFocus
          value={value}
          placeholder={t.chat.conversationTitle}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit()
          }}
        />

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            {t.common.cancel}
          </Button>

          <Button onClick={handleSubmit}>
            {t.common.save}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
