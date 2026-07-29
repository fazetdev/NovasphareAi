import { AuthLayout } from "./AuthLayout"
import { RegistrationForm } from "./RegistrationForm"

export function RegistrationScreen() {
  return (
    <AuthLayout
      title="Create account"
      description="Complete your NovaCore account activation."
    >
      <RegistrationForm />
    </AuthLayout>
  )
}
