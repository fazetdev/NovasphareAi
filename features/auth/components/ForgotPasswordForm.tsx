"use client"

import { FormEvent, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { useAuth } from "../hooks"

export function ForgotPasswordForm() {
  const { requestPasswordReset, loading } = useAuth()

  const [email, setEmail] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    await requestPasswordReset({ email })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <Input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        autoComplete="email"
      />

      <Button
        type="submit"
        className="w-full"
        disabled={loading}
      >
        Send reset link
      </Button>
    </form>
  )
}
