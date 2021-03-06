import { IAddress } from './IAddress'
import { IPhone } from './IPhone'
import { SystemRoleEnum } from './ISystemRole'

export interface IUser {
  id: number
  name: string
  birth_date: Date
  email: string
  username: string
  password: string
  address: IAddress
  phone: IPhone
  system_role_id?: SystemRoleEnum
  is_active?: boolean
}

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
