"use client"

import * as React from "react"
import { Menu } from "@base-ui/react/menu"

import { useDirection } from "@/lib/i18n/hooks"
import { cn } from "@/lib/utils"

function DropdownMenu(
  props: React.ComponentProps<typeof Menu.Root>
) {
  return <Menu.Root {...props} />
}

function DropdownMenuTrigger(
  props: React.ComponentProps<typeof Menu.Trigger>
) {
  return <Menu.Trigger {...props} />
}

function DropdownMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof Menu.Popup>) {
  const direction = useDirection()

  return (
    <Menu.Portal>
      <Menu.Positioner>
        <Menu.Popup
          dir={direction}
          className={cn(
            "z-50 min-w-40 rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-md outline-none",
            className
          )}
          {...props}
        />
      </Menu.Positioner>
    </Menu.Portal>
  )
}

function DropdownMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof Menu.Item>) {
  const direction = useDirection()

  return (
    <Menu.Item
      dir={direction}
      className={cn(
        "flex items-center rounded-md px-3 py-2 text-sm outline-none hover:bg-muted",
        className
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
}
