"use client"

import type { PropsWithChildren } from "react"

interface AutomationSectionProps
  extends PropsWithChildren {
  title: string
  description?: string
}

export function AutomationSection({
  title,
  description,
  children,
}: AutomationSectionProps) {
  return (
    <section
      aria-labelledby={title}
      className="space-y-4"
    >
      <header>
        <h2
          id={title}
          className="text-lg font-semibold"
        >
          {title}
        </h2>

        {description && (
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </header>

      {children}
    </section>
  )
}
