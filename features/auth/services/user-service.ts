import type {
  Invitation,
  UserIdentity,
  UserStatus,
} from "../types"

export interface CreateInvitationRequest {
  email: string
  departmentIds: string[]
  teamIds: string[]
  roleIds: string[]
}

export interface UserService {
  inviteUser(
    request: CreateInvitationRequest
  ): Promise<Invitation>

  acceptInvitation(
    invitationId: string,
    password: string
  ): Promise<UserIdentity>

  getUsers(): Promise<UserIdentity[]>

  updateUserStatus(
    userId: string,
    status: UserStatus
  ): Promise<UserIdentity>

  approveUser(
    userId: string
  ): Promise<UserIdentity>

  suspendUser(
    userId: string
  ): Promise<UserIdentity>
}
