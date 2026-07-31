"use client"

import { ReactNode } from "react"

import { useDirection, useTranslations } from "@/lib/i18n/hooks"
import { cn } from "@/lib/utils"
import { Nav } from "@/components/layout/nav"
import { marketingNav } from "@/lib/constants/navigation"

type MarketingShellProps = {
  children: ReactNode
  className?: string
}

export function MarketingShell({
  children,
  className,
}: MarketingShellProps) {
  const direction = useDirection()
  const t = useTranslations()

  return (
    <div
      dir={direction}
      className="min-h-screen flex flex-col bg-background text-foreground"
    >
      <header className="h-16 border-b border-border">
        <div
          className={cn(
            "mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
            direction === "rtl" && "flex-row-reverse"
          )}
        >
          <div className="text-sm font-semibold">
            {t.common.appName}
          </div>

          <Nav items={marketingNav} />
        </div>
      </header>

      <main className={cn("flex-1", className)}>
        {children}
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex h-14 max-w-7xl items-center px-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {t.common.appName}
        </div>
      </footer>
    </div>
  )
}
