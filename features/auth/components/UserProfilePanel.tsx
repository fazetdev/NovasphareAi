"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function UserProfilePanel() {
  return (
    <Card className="space-y-6 p-6">
      <div>
        <h2 className="text-lg font-semibold">
          My Profile
        </h2>

        <p className="text-sm text-muted-foreground">
          Update your personal account information.
        </p>
      </div>

      <div className="space-y-4">
        <Input
          placeholder="Full name"
          autoComplete="name"
        />

        <Input
          type="email"
          placeholder="Email address"
          autoComplete="email"
        />

        <Input
          placeholder="Language"
        />

        <Input
          placeholder="Locale"
        />

        <Input
          placeholder="Timezone"
        />
      </div>

      <Button className="w-full">
        Save Changes
      </Button>
    </Card>
  )
}
