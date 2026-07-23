import type { ReactNode } from "react"
import { Inbox, type LucideIcon } from "lucide-react"

interface EmptyStateProps {
  title: string
  description: string
  icon?: LucideIcon
  action?: ReactNode
  children?: ReactNode
}

export function EmptyState({
  title,
  description,
  icon: Icon = Inbox,
  action,
  children,
}: EmptyStateProps) {
  return (
    <div
      className="flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-dashed px-6 py-12 text-center"
      role="status"
      aria-live="polite"
    >
      <Icon
        className="mb-4 h-10 w-10 text-muted-foreground"
        aria-hidden="true"
      />

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        {description}
      </p>

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}

      {children && (
        <div className="mt-6 w-full">
          {children}
        </div>
      )}
    </div>
  )
}
