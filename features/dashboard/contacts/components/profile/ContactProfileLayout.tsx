import { Card } from "@/components/ui/card"

import type { Contact } from "../../types"

import { ContactProfileTabs } from "./ContactProfileTabs"

interface ContactProfileLayoutProps {
  contact: Contact
}

export function ContactProfileLayout({
  contact,
}: ContactProfileLayoutProps) {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted text-xl font-semibold">
              {contact.displayName
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                {contact.displayName}
              </h2>

              <p className="text-sm text-muted-foreground">
                {contact.status} •{" "}
                {contact.lifecycleStage}
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Card className="p-4">
              <p className="text-xs text-muted-foreground">
                Organisation
              </p>

              <p className="mt-2 font-medium">
                {"organizationName" in contact
                  ? String(
                      contact.organizationName ??
                        "—",
                    )
                  : "—"}
              </p>
            </Card>

            <Card className="p-4">
              <p className="text-xs text-muted-foreground">
                Status
              </p>

              <p className="mt-2 font-medium">
                {contact.status}
              </p>
            </Card>

            <Card className="p-4">
              <p className="text-xs text-muted-foreground">
                Lifecycle
              </p>

              <p className="mt-2 font-medium">
                {contact.lifecycleStage}
              </p>
            </Card>

            <Card className="p-4">
              <p className="text-xs text-muted-foreground">
                Tags
              </p>

              <p className="mt-2 font-medium">
                {contact.tags.length > 0
                  ? contact.tags.join(", ")
                  : "—"}
              </p>
            </Card>
          </div>
        </div>
      </Card>

      <ContactProfileTabs
        contact={contact}
      />
    </div>
  )
}
