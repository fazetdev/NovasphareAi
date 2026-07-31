import type { ReactNode } from "react"
import { AlertTriangle, type LucideIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ErrorStateProps {
  title: string
  description: string
  onRetry?: () => void
  retryLabel?: string
  icon?: LucideIcon
  action?: ReactNode
}

export function ErrorState({
  title,
  description,
  onRetry,
  retryLabel,
  icon: Icon = AlertTriangle,
  action,
}: ErrorStateProps) {
  return (
    <div
      className="flex min-h-[280px] flex-col items-center justify-center rounded-xl border px-6 py-12 text-center"
      role="alert"
      aria-live="assertive"
    >
      <Icon
        className="mb-4 h-10 w-10 text-destructive"
        aria-hidden="true"
      />

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        {description}
      </p>

      {action ? (
        <div className="mt-6">
          {action}
        </div>
      ) : (
        onRetry &&
        retryLabel && (
          <Button
            className="mt-6"
            onClick={onRetry}
          >
            {retryLabel}
          </Button>
        )
      )}
    </div>
  )
}
