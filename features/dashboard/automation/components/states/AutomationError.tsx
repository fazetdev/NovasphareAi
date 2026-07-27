"use client"

interface AutomationErrorProps {
  message: string
}

export function AutomationError({
  message,
}: AutomationErrorProps) {
  return (
    <div className="rounded-md border border-destructive p-6">
      <h3 className="font-medium text-destructive">
        Something went wrong
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {message}
      </p>
    </div>
  )
}
