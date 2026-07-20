export function isActiveRoute(
  currentPath: string,
  href: string
): boolean {
  if (href === "/") return currentPath === "/"
  return currentPath.startsWith(href)
}
