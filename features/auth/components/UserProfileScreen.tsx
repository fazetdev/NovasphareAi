import { AuthLayout } from "./AuthLayout"
import { UserProfilePanel } from "./UserProfilePanel"

export function UserProfileScreen() {
  return (
    <AuthLayout
      title="My Profile"
      description="Manage your personal account information and preferences."
    >
      <UserProfilePanel />
    </AuthLayout>
  )
}
