import { OrganizationWorkspace } from "./OrganizationWorkspace"

export function OrganizationSection() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">
          Organisations
        </h2>

        <p className="text-sm text-muted-foreground">
          Manage companies and their
          relationships with contacts,
          conversations, AI agents, and
          automations.
        </p>
      </div>

      <OrganizationWorkspace />
    </section>
  )
}
