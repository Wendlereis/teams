import { AxiosResponse } from 'axios'
import { teamsApi } from '.'

import { ICreateUserRequest, ICreateUserResponse, IUser } from '../interfaces/IUser'

export function getUserById(userId: number): Promise<AxiosResponse<IUser>> {
  return teamsApi.get(`/user/${userId}`)
}

export function createUser(user: ICreateUserRequest): Promise<AxiosResponse<ICreateUserResponse>> {
  return teamsApi.post('/user', user)
}

export function updateUser(user: IUser): Promise<AxiosResponse<IUser>> {
  return teamsApi.put(`/user/${user.id}`, user)
}
