import { AuthLayout } from "./AuthLayout"
import { AuthEmptyState } from "./AuthEmptyState"

export function InvitationActivationScreen() {
  return (
    <AuthLayout
      title="Activate account"
      description="Complete your invitation and activate your NovaCore account."
    >
      <AuthEmptyState
        title="Invitation Activation"
        description="The invitation verification and account activation flow will be implemented in the next milestone."
      />
    </AuthLayout>
  )
}
