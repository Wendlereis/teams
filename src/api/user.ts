import { AxiosResponse } from 'axios'
import { teamsApi } from '.'

import { IUser, IUserRequest, IUserResponse } from '../interfaces/IUser'

export function createUser(user: IUserRequest): Promise<AxiosResponse<IUserResponse>> {
  return teamsApi.post('/user', user)
}

export function getUserById(id: number): Promise<AxiosResponse<IUser>> {
  return teamsApi.get(`/user/${id}`)
}

export function updateUserById(user: IUser): Promise<AxiosResponse<IUserResponse>> {
  return teamsApi.put<IUserResponse>(`/user/${user.id}`, user)
}
