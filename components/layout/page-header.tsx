"use client"

import { ReactNode } from "react"

import { useDirection } from "@/lib/i18n/hooks"
import { cn } from "@/lib/utils"

type PageHeaderProps = {
  title: string
  description?: string
  actions?: ReactNode
}

export function PageHeader({
  title,
  description,
  actions,
}: PageHeaderProps) {
  const direction = useDirection()

  return (
    <div
      dir={direction}
      className={cn(
        "mb-6 flex items-start justify-between",
        direction === "rtl" && "flex-row-reverse"
      )}
    >
      <div>
        <h1 className="text-lg font-semibold">{title}</h1>

        {description && (
          <p className="mt-1 text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {actions && <div>{actions}</div>}
    </div>
  )
}
