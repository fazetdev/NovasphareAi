export type NavItem = {
  label: string
  href: string
}

export const marketingNav: NavItem[] = [
  { label: "Features", href: "/features" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export const dashboardNav: NavItem[] = [
  { label: "AI", href: "/dashboard/ai" },
  { label: "Chats", href: "/dashboard/chats" },
  { label: "Knowledge Base", href: "/dashboard/knowledge-base" },
  { label: "Branding", href: "/dashboard/branding" },
  { label: "Settings", href: "/dashboard/settings" },
  { label: "Account", href: "/dashboard/account" },
]
