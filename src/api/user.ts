import { AxiosResponse } from 'axios'
import { teamsApi } from '.'

import { IUserRequest, IUserResponse } from '../interfaces/IUser'

export function createUser(user: IUserRequest): Promise<AxiosResponse<IUserResponse>> {
  return teamsApi.post('/user', user)
}
