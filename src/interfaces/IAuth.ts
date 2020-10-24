export interface IAuthRequest {
  username: string
  password: string
}

export interface IAuthResponse {
  id: number
  name: string
  email: string
  token: string
}
