import type {
  Invitation,
  UserIdentity,
  UserStatus,
} from "../types";

import type {
  CreateInvitationRequest,
  UserService,
} from "./user-service";

const mockUsers: UserIdentity[] = [
  {
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
          id: "permission-all",
          resource: "*",
          action: "*",
        },
      ],
    },
  },
];

export const mockUserService: UserService = {
  async getUsers(): Promise<UserIdentity[]> {
    return mockUsers;
  },

  async inviteUser(
    _request: CreateInvitationRequest,
  ): Promise<Invitation> {
    return {
      id: "invite-001",
      email: "new-user@novacore.local",
      invitedBy: "user-001",
      departmentIds: [],
      teamIds: [],
      roleIds: [],
      expiresAt: new Date().toISOString(),
    };
  },

  async acceptInvitation(
    invitationId: string,
    _password: string,
  ): Promise<UserIdentity> {
    return {
      ...mockUsers[0],
      id: invitationId,
    };
  },

  async updateUserStatus(
    userId: string,
    status: UserStatus,
  ): Promise<UserIdentity> {
    return {
      ...mockUsers[0],
      id: userId,
      status,
    };
  },

  async approveUser(
    userId: string,
  ): Promise<UserIdentity> {
    return this.updateUserStatus(userId, "active");
  },

  async suspendUser(
    userId: string,
  ): Promise<UserIdentity> {
    return this.updateUserStatus(userId, "suspended");
  },
};
