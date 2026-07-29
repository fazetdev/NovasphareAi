"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function SecuritySettingsPanel() {
  return (
    <Card className="space-y-6 p-6">
      <div>
        <h2 className="text-lg font-semibold">
          Security Settings
        </h2>

        <p className="text-sm text-muted-foreground">
          Manage your password, authentication methods and account security.
        </p>
      </div>

      <div className="space-y-3">
        <Button className="w-full">
          Change Password
        </Button>

        <Button
          variant="outline"
          className="w-full"
        >
          Manage MFA
        </Button>

        <Button
          variant="outline"
          className="w-full"
        >
          Manage Sessions
        </Button>

        <Button
          variant="outline"
          className="w-full"
        >
          Trusted Devices
        </Button>
      </div>
    </Card>
  )
}
