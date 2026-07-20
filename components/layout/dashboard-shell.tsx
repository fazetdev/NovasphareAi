"use client"

import { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { dashboardNav } from "@/lib/constants/navigation"

type DashboardShellProps = {
  children: ReactNode
  className?: string
}

export function DashboardShell({
  children,
  className,
}: DashboardShellProps) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 border-r border-border flex-col">
        <div className="h-14 flex items-center px-4 border-b border-border font-semibold text-sm">
          NovaCore Admin
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {dashboardNav.map((item) => {
            const active = pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-md px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-muted text-foreground font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <main className={cn("flex-1", className)}>
          {children}
        </main>
      </div>
    </div>
  )
}
