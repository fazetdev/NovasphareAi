type WorkflowActionsProps = {
  onEdit?: () => void
  onDuplicate?: () => void
  onToggleStatus?: () => void
}

export function WorkflowActions({
  onEdit,
  onDuplicate,
  onToggleStatus,
}: WorkflowActionsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={onEdit}
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        Edit
      </button>

      <button
        type="button"
        onClick={onDuplicate}
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        Duplicate
      </button>

      <button
        type="button"
        onClick={onToggleStatus}
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        Enable / Disable
      </button>
    </div>
  )
}
