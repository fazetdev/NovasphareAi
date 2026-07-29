export type AuthModuleIntegration = {
  profile: {
    route: "/dashboard/account"
  }

  security: {
    route: "/dashboard/settings/security"
  }

  users: {
    route: "/dashboard/settings/users"
  }

  roles: {
    route: "/dashboard/settings/roles"
  }

  permissions: {
    route: "/dashboard/settings/permissions"
  }

  identityProviders: {
    route: "/dashboard/settings/identity-providers"
  }
}

export const authModuleIntegration: AuthModuleIntegration = {
  profile: {
    route: "/dashboard/account",
  },

  security: {
    route: "/dashboard/settings/security",
  },

  users: {
    route: "/dashboard/settings/users",
  },

  roles: {
    route: "/dashboard/settings/roles",
  },

  permissions: {
    route: "/dashboard/settings/permissions",
  },

  identityProviders: {
    route: "/dashboard/settings/identity-providers",
  },
}
