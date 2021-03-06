export interface IAuthRequest {
  usernameOrEmail: string
  password: string
}

export interface IAuthResponse {
  id: number
  name: string
  email: string
  token: string
}

export type IAuthContextState = IAuthResponse

export interface IAuthContext {
  authenticatedUser: IAuthContextState
  handleAuthenticatedUser: (user: IAuthContextState) => void
}
