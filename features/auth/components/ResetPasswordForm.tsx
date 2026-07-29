"use client"

import { FormEvent, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { useAuth } from "../hooks"

interface ResetPasswordFormProps {
  token: string
}

export function ResetPasswordForm({
  token,
}: ResetPasswordFormProps) {
  const { resetPassword, loading } = useAuth()

  const [password, setPassword] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    await resetPassword({
      token,
      password,
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <Input
        type="password"
        placeholder="New password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        autoComplete="new-password"
      />

      <Button
        type="submit"
        className="w-full"
        disabled={loading}
      >
        Reset password
      </Button>
    </form>
  )
}
