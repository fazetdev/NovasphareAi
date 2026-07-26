import { ImportExportCard } from "./ImportExportCard"

export function ImportExportTab() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <ImportExportCard
        title="Import Contacts"
        description="Import contacts, organisations and relationships from CSV, Excel or external CRMs."
        action="Import"
      />

      <ImportExportCard
        title="Export Contacts"
        description="Export contacts, organisations and relationship data for reporting or migration."
        action="Export"
      />
    </div>
  )
}
