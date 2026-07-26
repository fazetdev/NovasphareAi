"use client"

import { useMemo, useState } from "react"

import type {
  Contact,
  ContactStatus,
  Segment,
} from "../../types"

import { Card } from "@/components/ui/card"

import { ContactsBulkActions } from "../bulk-actions/ContactsBulkActions"
import { ContactsTable } from "../table/ContactsTable"
import { ContactsManagementToolbar } from "./ContactsManagementToolbar"

interface ContactsManagementSectionProps {
  contacts: Contact[]
  segments: Segment[]
}

type SortField =
  | "name"
  | "status"
  | "lifecycle"

export function ContactsManagementSection({
  contacts,
  segments,
}: ContactsManagementSectionProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortField, setSortField] =
    useState<SortField>("name")
  const [statusFilter, setStatusFilter] =
    useState<ContactStatus | "all">("all")
  const [segmentFilter, setSegmentFilter] =
    useState("")
  const [
    selectedContactIds,
    setSelectedContactIds,
  ] = useState<string[]>([])

  const filteredContacts = useMemo(() => {
    const query =
      searchQuery.trim().toLowerCase()

    return contacts
      .filter((contact) => {
        const matchesSearch =
          !query ||
          contact.displayName
            .toLowerCase()
            .includes(query) ||
          contact.tags.some((tag) =>
            tag.toLowerCase().includes(query),
          )

        const matchesStatus =
          statusFilter === "all" ||
          contact.status === statusFilter

        // TODO: Enable once Contact.segments exists.
        const matchesSegment =
          !segmentFilter

        return (
          matchesSearch &&
          matchesStatus &&
          matchesSegment
        )
      })
      .sort((a, b) => {
        switch (sortField) {
          case "status":
            return a.status.localeCompare(
              b.status,
            )
          case "lifecycle":
            return a.lifecycleStage.localeCompare(
              b.lifecycleStage,
            )
          default:
            return a.displayName.localeCompare(
              b.displayName,
            )
        }
      })
  }, [
    contacts,
    searchQuery,
    statusFilter,
    segmentFilter,
    sortField,
  ])

  return (
    <Card className="p-6">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">
          Contact Management
        </h2>

        <p className="text-sm text-muted-foreground">
          Search, filter, organize, and manage people,
          organizations, and business relationships.
        </p>
      </div>

      <div className="mt-6">
        <ContactsManagementToolbar
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          segments={segments}
          segmentFilter={segmentFilter}
          onSegmentFilterChange={setSegmentFilter}
        />
      </div>

      <div className="mt-6">
        <ContactsBulkActions
          selectedCount={
            selectedContactIds.length
          }
        />
      </div>

      <div className="mt-6">
        <ContactsTable
          contacts={filteredContacts}
          selectedContactIds={
            selectedContactIds
          }
          onSelectionChange={
            setSelectedContactIds
          }
          sortField={sortField}
          onSortChange={setSortField}
        />
      </div>
    </Card>
  )
}
