"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function MFAConfigurationPanel() {
  return (
    <div className="space-y-4">
      <Card className="p-6">
        <h2 className="text-lg font-semibold">
          Multi-Factor Authentication
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Configure additional verification methods to secure your account.
        </p>

        <div className="mt-6 space-y-3">
          <Button className="w-full">
            Set up TOTP Authenticator
          </Button>

          <Button
            variant="outline"
            className="w-full"
          >
            Enable Email Verification
          </Button>

          <Button
            variant="outline"
            className="w-full"
          >
            Register Passkey
          </Button>

          <Button
            variant="outline"
            className="w-full"
          >
            Generate Backup Codes
          </Button>
        </div>
      </Card>
    </div>
  )
}
