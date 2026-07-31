"use client"

import { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  useDirection,
  useTranslations,
} from "@/lib/i18n/hooks"
import { cn } from "@/lib/utils"
import { dashboardNav } from "@/lib/constants/navigation"

type DashboardShellProps = {
  children: ReactNode
  className?: string
}

function getTranslation(
  translations: Record<string, string>,
  key: string,
) {
  return translations[key] ?? key
}

export function DashboardShell({
  children,
  className,
}: DashboardShellProps) {
  const pathname = usePathname()
  const direction = useDirection()
  const t = useTranslations()

  return (
    <div
      dir={direction}
      className={cn(
        "min-h-screen flex bg-background text-foreground",
        direction === "rtl" && "flex-row-reverse"
      )}
    >
      <aside className="hidden w-64 flex-col border-e border-border md:flex">
        <div className="h-14 border-b border-border px-4 flex items-center text-sm font-semibold">
          {t.common.appName}
        </div>

        <nav className="flex-1 space-y-1 p-3">
          {dashboardNav.map((item) => {
            const active = pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-md px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-muted font-medium text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {getTranslation(t.navigation, item.labelKey)}
              </Link>
            )
          })}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <main className={cn("flex-1", className)}>
          {children}
        </main>
      </div>
    </div>
  )
}
