import { AuthLayout } from "./AuthLayout"
import { SessionManagementPanel } from "./SessionManagementPanel"

export function SessionManagementScreen() {
  return (
    <AuthLayout
      title="Sessions & Devices"
      description="Manage active sessions and trusted devices for your NovaCore account."
    >
      <SessionManagementPanel />
    </AuthLayout>
  )
}
