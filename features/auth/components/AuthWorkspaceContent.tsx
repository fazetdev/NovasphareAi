import { AuthEmptyState } from "./AuthEmptyState"
import { AuthLayout } from "./AuthLayout"

export function AuthWorkspaceContent() {
  return (
    <AuthLayout
      title="Authentication"
      description="Enterprise identity foundation for NovaCore."
    >
      <AuthEmptyState
        title="Authentication Module"
        description="Authentication screens will be implemented in the following milestones."
      />
    </AuthLayout>
  )
}
