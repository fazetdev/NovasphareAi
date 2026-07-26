type WorkflowHeaderProps = {
  onCreate?: () => void
}

export function WorkflowHeader({
  onCreate,
}: WorkflowHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-lg font-semibold">
          Workflows
        </h2>

        <p className="text-sm text-muted-foreground">
          Create and manage automated business processes.
        </p>
      </div>

      <button
        type="button"
        onClick={onCreate}
        className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
      >
        Create Workflow
      </button>
    </div>
  )
}
