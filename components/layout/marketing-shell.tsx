import { ReactNode } from "react"
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
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="h-16 border-b border-border">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="text-sm font-semibold">NovaCore</div>

          <Nav items={marketingNav} />
        </div>
      </header>

      <main className={cn("flex-1", className)}>{children}</main>

      <footer className="border-t border-border">
        <div className="mx-auto flex h-14 max-w-7xl items-center px-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} NovaCore AI Platform
        </div>
      </footer>
    </div>
  )
}
