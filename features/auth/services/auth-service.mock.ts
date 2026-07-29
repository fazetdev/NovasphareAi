import type {
  AuthService,
  LoginRequest,
  RegisterRequest,
  PasswordResetRequest,
  ResetPasswordRequest,
} from "./auth-service"

import type { UserIdentity } from "../types"

const mockUser: UserIdentity = {
  id: "user-001",
  email: "admin@novacore.local",
  name: "NovaCore Admin",
  language: "en",
  locale: "en-GB",
  timezone: "UTC",
  status: "active",
  membership: {
    organizationId: "org-001",
    departments: [],
    teams: [],
    roles: [
      {
        id: "role-admin",
        name: "Administrator",
      },
    ],
    permissions: [
      {
        id: "permission-manage",
        resource: "*",
        action: "*",
      },
    ],
  },
}

export const mockAuthService: AuthService = {
  async login(_request: LoginRequest) {
    return {
      user: mockUser,
      accessToken: "mock-access-token",
    }
  },

  async register(_request: RegisterRequest) {
    return {
      user: mockUser,
      accessToken: "mock-access-token",
    }
  },

  async logout() {
    return Promise.resolve()
  },

  async getCurrentUser() {
    return mockUser
  },

  async requestPasswordReset(
    _request: PasswordResetRequest
  ) {
    return Promise.resolve()
  },

  async resetPassword(
    _request: ResetPasswordRequest
  ) {
    return Promise.resolve()
  },
}
