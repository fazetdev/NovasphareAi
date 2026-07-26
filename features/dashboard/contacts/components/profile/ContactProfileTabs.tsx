"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"

import type { Contact } from "../../types"

import { AuditHistoryTab } from "../audit"
import { CustomFieldsTab } from "../custom-fields"
import { ImportExportTab } from "../import-export"
import { PermissionsTab } from "../permissions"
import { RelationshipsTab } from "../relationships"

import { ContactAIInsightsTab } from "./ContactAIInsightsTab"
import { ContactConversationsTab } from "./ContactConversationsTab"
import { ContactDocumentsTab } from "./ContactDocumentsTab"
import { ContactNotesTab } from "./ContactNotesTab"
import { ContactOverviewTab } from "./ContactOverviewTab"
import { ContactTasksTab } from "./ContactTasksTab"
import { ContactTimelineTab } from "./ContactTimelineTab"

const tabs = [
  "Overview",
  "Timeline",
  "Relationships",
  "Notes",
  "Tasks",
  "Conversations",
  "AI Insights",
  "Documents",
  "Custom Fields",
  "Import / Export",
  "Permissions",
  "Audit History",
] as const

type ProfileTab = (typeof tabs)[number]

interface ContactProfileTabsProps {
  contact: Contact
}

export function ContactProfileTabs({
  contact,
}: ContactProfileTabsProps) {
  const [activeTab, setActiveTab] =
    useState<ProfileTab>("Overview")

  function renderContent() {
    switch (activeTab) {
      case "Overview":
        return (
          <ContactOverviewTab
            contact={contact}
          />
        )

      case "Timeline":
        return <ContactTimelineTab />

      case "Relationships":
        return <RelationshipsTab />

      case "Notes":
        return <ContactNotesTab />

      case "Tasks":
        return <ContactTasksTab />

      case "Conversations":
        return <ContactConversationsTab />

      case "AI Insights":
        return <ContactAIInsightsTab />

      case "Documents":
        return <ContactDocumentsTab />

      case "Custom Fields":
        return <CustomFieldsTab />

      case "Import / Export":
        return <ImportExportTab />

      case "Permissions":
        return <PermissionsTab />

      case "Audit History":
        return <AuditHistoryTab />

      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <Button
            key={tab}
            size="sm"
            variant={
              activeTab === tab
                ? "default"
                : "outline"
            }
            onClick={() =>
              setActiveTab(tab)
            }
          >
            {tab}
          </Button>
        ))}
      </div>

      {renderContent()}
    </div>
  )
}
