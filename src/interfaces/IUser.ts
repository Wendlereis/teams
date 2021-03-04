export interface IUserRequest {
  name: string
  email: string
  username: string
  password: string
  system_role_id: number
}

export interface IUserResponse {
  id: number
  name: string
  email: string
  username: string
}
