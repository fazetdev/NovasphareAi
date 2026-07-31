export type NavItem = {
  labelKey: string
  href: string
}

export const marketingNav: NavItem[] = [
  { labelKey: "features", href: "/features" },
  { labelKey: "faq", href: "/faq" },
  { labelKey: "contact", href: "/contact" },
]

export const dashboardNav: NavItem[] = [
  { labelKey: "ai", href: "/dashboard/ai" },
  { labelKey: "chats", href: "/dashboard/chats" },
  {
    labelKey: "knowledgeBase",
    href: "/dashboard/knowledge-base",
  },
  { labelKey: "automation", href: "/dashboard/automation" },
  { labelKey: "analytics", href: "/dashboard/analytics" },
  { labelKey: "branding", href: "/dashboard/branding" },
  { labelKey: "settings", href: "/dashboard/settings" },
  { labelKey: "account", href: "/dashboard/account" },
]
