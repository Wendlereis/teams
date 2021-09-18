import { IPhone } from './IPhone'
import { IAddress } from './IAddress'

export interface IUser {
  id: number
  name: string
  age: number
  birth_date: string
  phone: IPhone
  email: string
  username: string
  password: string
  is_active: boolean
  address: IAddress
  system_role_id: number
}

export type ICreateUserRequest = Pick<IUser, 'name' | 'email' | 'username' | 'password' | 'system_role_id'>

export type ICreateUserResponse = Pick<IUser, 'id' | 'name' | 'email' | 'username'>
