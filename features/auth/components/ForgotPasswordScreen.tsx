import { AuthLayout } from "./AuthLayout"
import { ForgotPasswordForm } from "./ForgotPasswordForm"

export function ForgotPasswordScreen() {
  return (
    <AuthLayout
      title="Forgot password"
      description="Request a password reset for your NovaCore account."
    >
      <ForgotPasswordForm />
    </AuthLayout>
  )
}
