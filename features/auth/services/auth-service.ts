import type { UserIdentity } from "../types"

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  name: string
}

export interface PasswordResetRequest {
  email: string
}

export interface ResetPasswordRequest {
  token: string
  password: string
}

export interface AuthenticationResponse {
  user: UserIdentity
  accessToken: string
}

export interface AuthService {
  login(request: LoginRequest): Promise<AuthenticationResponse>

  register(request: RegisterRequest): Promise<AuthenticationResponse>

  logout(): Promise<void>

  getCurrentUser(): Promise<UserIdentity | null>

  requestPasswordReset(
    request: PasswordResetRequest
  ): Promise<void>

  resetPassword(
    request: ResetPasswordRequest
  ): Promise<void>
}
