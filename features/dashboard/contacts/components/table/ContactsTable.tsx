import { Badge } from "@/components/ui/badge"

import { ContactRowActions } from "../actions/ContactRowActions"

import type { Contact } from "../../types"

interface ContactsTableProps {
  contacts: Contact[]
  selectedContactIds: string[]
  onSelectionChange: (
    ids: string[],
  ) => void
  sortField: "name" | "status" | "lifecycle"
  onSortChange: (
    field: "name" | "status" | "lifecycle",
  ) => void
}

function getStatusVariant(
  status: Contact["status"],
): "default" | "secondary" | "destructive" | "outline" {
  switch (status) {
    case "active":
      return "default"
    case "inactive":
      return "secondary"
    case "blocked":
      return "destructive"
    default:
      return "outline"
  }
}

export function ContactsTable({
  contacts,
  selectedContactIds,
  onSelectionChange,
  sortField,
  onSortChange,
}: ContactsTableProps) {
  function toggleSelection(id: string) {
    if (selectedContactIds.includes(id)) {
      onSelectionChange(
        selectedContactIds.filter(
          (item) => item !== id,
        ),
      )
      return
    }

    onSelectionChange([
      ...selectedContactIds,
      id,
    ])
  }

  return (
    <div className="overflow-hidden rounded-lg border">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/40">
            <tr>
              <th className="w-12 px-4 py-3">
                <input
                  type="checkbox"
                  aria-label="Select all"
                />
              </th>

              <th
                className="cursor-pointer px-4 py-3 text-left"
                onClick={() =>
                  onSortChange("name")
                }
              >
                Name
              </th>

              <th className="px-4 py-3 text-left">
                Organisation
              </th>

              <th
                className="cursor-pointer px-4 py-3 text-left"
                onClick={() =>
                  onSortChange("status")
                }
              >
                Status
              </th>

              <th
                className="cursor-pointer px-4 py-3 text-left"
                onClick={() =>
                  onSortChange("lifecycle")
                }
              >
                Lifecycle
              </th>

              <th className="px-4 py-3 text-left">
                Tags
              </th>

              <th className="px-4 py-3 text-left">
                AI Agent
              </th>

              <th className="px-4 py-3 text-left">
                Last Activity
              </th>

              <th className="w-20 px-4 py-3 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td
                  colSpan={9}
                  className="px-4 py-12 text-center text-muted-foreground"
                >
                  No contacts available.
                </td>
              </tr>
            ) : (
              contacts.map((contact) => (
                <tr
                  key={contact.id}
                  className="border-b"
                >
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedContactIds.includes(
                        contact.id,
                      )}
                      onChange={() =>
                        toggleSelection(
                          contact.id,
                        )
                      }
                    />
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-xs font-semibold">
                        {contact.displayName
                          .split(" ")
                          .map(
                            (part) => part[0],
                          )
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </div>

                      <div>
                        <p className="font-medium">
                          {contact.displayName}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          {contact.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    {"organizationName" in contact
                      ? String(
                          contact.organizationName ??
                            "—",
                        )
                      : "—"}
                  </td>

                  <td className="px-4 py-3">
                    <Badge
                      variant={getStatusVariant(
                        contact.status,
                      )}
                    >
                      {contact.status}
                    </Badge>
                  </td>

                  <td className="px-4 py-3">
                    {contact.lifecycleStage}
                  </td>

                  <td className="px-4 py-3">
                    {contact.tags.join(", ")}
                  </td>

                  <td className="px-4 py-3">
                    —
                  </td>

                  <td className="px-4 py-3">
                    —
                  </td>

                  <td className="px-4 py-3 text-right">
                    <ContactRowActions
                      contactId={contact.id}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
