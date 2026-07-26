import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import type {
  ContactStatus,
  Segment,
} from "../../types"

interface ContactsManagementToolbarProps {
  searchQuery: string
  onSearchQueryChange: (
    value: string,
  ) => void

  statusFilter: ContactStatus | "all"
  onStatusFilterChange: (
    value: ContactStatus | "all",
  ) => void

  segments: Segment[]
  segmentFilter: string
  onSegmentFilterChange: (
    value: string,
  ) => void
}

export function ContactsManagementToolbar({
  searchQuery,
  onSearchQueryChange,
  statusFilter,
  onStatusFilterChange,
  segments,
  segmentFilter,
  onSegmentFilterChange,
}: ContactsManagementToolbarProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-1 flex-col gap-3 lg:flex-row">
        <Input
          value={searchQuery}
          onChange={(event) =>
            onSearchQueryChange(event.target.value)
          }
          placeholder="Search contacts, organizations..."
          className="lg:max-w-md"
        />

        <select
          value={statusFilter}
          onChange={(event) =>
            onStatusFilterChange(
              event.target.value as ContactStatus | "all",
            )
          }
          className="rounded-md border px-3 py-2 text-sm"
        >
          <option value="all">All Statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="blocked">Blocked</option>
          <option value="archived">Archived</option>
        </select>

        <select
          value={segmentFilter}
          onChange={(event) =>
            onSegmentFilterChange(event.target.value)
          }
          className="rounded-md border px-3 py-2 text-sm"
        >
          <option value="">
            All Segments
          </option>

          {segments.map((segment) => (
            <option
              key={segment.id}
              value={segment.id}
            >
              {segment.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button variant="outline">
          Import
        </Button>

        <Button variant="outline">
          Export
        </Button>

        <Button>
          New Contact
        </Button>
      </div>
    </div>
  )
}
