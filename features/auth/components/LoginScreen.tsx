import { AuthLayout } from "./AuthLayout"
import { LoginForm } from "./LoginForm"

export function LoginScreen() {
  return (
    <AuthLayout
      title="Sign in"
      description="Sign in to your NovaCore organisation."
    >
      <LoginForm />
    </AuthLayout>
  )
}
