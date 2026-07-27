"use client"

interface AutomationEmptyProps {
  title: string
  description: string
}

export function AutomationEmpty({
  title,
  description,
}: AutomationEmptyProps) {
  return (
    <div className="rounded-md border border-dashed p-10 text-center">
      <h3 className="text-lg font-medium">
        {title}
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  )
}
