import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { isActiveRoute } from "@/lib/utils/routes"
import type { NavItem } from "@/lib/constants/navigation"

type NavProps = {
  items: NavItem[]
  className?: string
}

export function Nav({ items, className }: NavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex items-center gap-6", className)}>
      {items.map((item) => {
        const active = isActiveRoute(pathname, item.href)

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm transition-colors",
              active
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
