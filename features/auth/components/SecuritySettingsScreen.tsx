import { AuthLayout } from "./AuthLayout"
import { SecuritySettingsPanel } from "./SecuritySettingsPanel"

export function SecuritySettingsScreen() {
  return (
    <AuthLayout
      title="Security"
      description="Manage your personal security preferences and account protection."
    >
      <SecuritySettingsPanel />
    </AuthLayout>
  )
}
