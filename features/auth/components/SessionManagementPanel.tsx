"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import { useSession } from "../hooks"

export function SessionManagementPanel() {
  const {
    sessions,
    loading,
    revokeSession,
  } = useSession()

  if (loading) {
    return <p>Loading sessions...</p>
  }

  if (sessions.length === 0) {
    return (
      <Card className="p-6 text-center">
        No active sessions found.
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {sessions.map((session) => (
        <Card
          key={session.id}
          className="flex items-center justify-between p-4"
        >
          <div>
            <p className="font-medium">
              {session.deviceName}
            </p>

            <p className="text-sm text-muted-foreground">
              {session.ipAddress}
            </p>
          </div>

          <Button
            variant="outline"
            onClick={() => revokeSession(session.id)}
          >
            Sign out
          </Button>
        </Card>
      ))}
    </div>
  )
}
