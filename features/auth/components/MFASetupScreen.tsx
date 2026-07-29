import { AuthLayout } from "./AuthLayout"
import { MFAConfigurationPanel } from "./MFAConfigurationPanel"

export function MFASetupScreen() {
  return (
    <AuthLayout
      title="Multi-Factor Authentication"
      description="Configure additional verification methods to secure your NovaCore account."
    >
      <MFAConfigurationPanel />
    </AuthLayout>
  )
}
