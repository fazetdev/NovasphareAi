import { AuthLayout } from "./AuthLayout"
import { ResetPasswordForm } from "./ResetPasswordForm"

interface ResetPasswordScreenProps {
  token: string
}

export function ResetPasswordScreen({
  token,
}: ResetPasswordScreenProps) {
  return (
    <AuthLayout
      title="Reset password"
      description="Create a new password for your NovaCore account."
    >
      <ResetPasswordForm token={token} />
    </AuthLayout>
  )
}
