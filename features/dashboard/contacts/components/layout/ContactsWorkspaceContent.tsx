"use client"

import { PageContainer } from "@/components/layout/page-container"
import { ErrorState } from "@/components/ui/ErrorState"

import { useContactsWorkspace } from "../../hooks"

import { ContactsManagementSection } from "../management/ContactsManagementSection"
import { ContactsOverviewSection } from "../overview/ContactsOverviewSection"
import { OrganizationSection } from "../organizations"

export function ContactsWorkspaceContent() {
  const {
    contacts,
    segments,
    isLoading,
    error,
  } = useContactsWorkspace()

  if (error) {
    return (
      <PageContainer>
        <ErrorState
          title="Unable to load contacts"
          description={error}
        />
      </PageContainer>
    )
  }

  if (isLoading) {
    return (
      <PageContainer>
        <div className="py-12 text-center text-muted-foreground">
          Loading contacts...
        </div>
      </PageContainer>
    )
  }

  return (
    <PageContainer>
      <div className="space-y-8">
        <ContactsOverviewSection />

        <ContactsManagementSection
          contacts={contacts}
          segments={segments}
        />

        <OrganizationSection />
      </div>
    </PageContainer>
  )
}
