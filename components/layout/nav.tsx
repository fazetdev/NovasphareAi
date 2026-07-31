"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { useDirection, useTranslations } from "@/lib/i18n/hooks"
import { cn } from "@/lib/utils"
import { isActiveRoute } from "@/lib/utils/routes"
import type { NavItem } from "@/lib/constants/navigation"

type NavProps = {
  items: NavItem[]
  className?: string
}

function getTranslation(
  translations: Record<string, string>,
  key: string,
) {
  return translations[key] ?? key
}

export function Nav({ items, className }: NavProps) {
  const pathname = usePathname()
  const direction = useDirection()
  const t = useTranslations()

  return (
    <nav
      dir={direction}
      className={cn(
        "flex items-center gap-6",
        direction === "rtl" && "flex-row-reverse",
        className
      )}
    >
      {items.map((item) => {
        const active = isActiveRoute(pathname, item.href)

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm transition-colors",
              active
                ? "font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {getTranslation(t.navigation, item.labelKey)}
          </Link>
        )
      })}
    </nav>
  )
}
