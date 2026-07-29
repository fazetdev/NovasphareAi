"use client"

import { useEffect, useState } from "react"

import { mockAuthService } from "../services"
import type {
  AuthenticationResponse,
  LoginRequest,
  RegisterRequest,
  PasswordResetRequest,
  ResetPasswordRequest,
} from "../services"
import type { UserIdentity } from "../types"

export function useAuth() {
  const [user, setUser] = useState<UserIdentity | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    mockAuthService.getCurrentUser().then((currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
  }, [])

  async function login(
    request: LoginRequest
  ): Promise<AuthenticationResponse> {
    const response = await mockAuthService.login(request)
    setUser(response.user)
    return response
  }

  async function register(
    request: RegisterRequest
  ): Promise<AuthenticationResponse> {
    const response = await mockAuthService.register(request)
    setUser(response.user)
    return response
  }

  async function logout(): Promise<void> {
    await mockAuthService.logout()
    setUser(null)
  }

  async function requestPasswordReset(
    request: PasswordResetRequest
  ): Promise<void> {
    await mockAuthService.requestPasswordReset(request)
  }

  async function resetPassword(
    request: ResetPasswordRequest
  ): Promise<void> {
    await mockAuthService.resetPassword(request)
  }

  return {
    user,
    loading,
    login,
    register,
    logout,
    requestPasswordReset,
    resetPassword,
  }
}
