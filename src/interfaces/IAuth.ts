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
