import { AxiosResponse } from 'axios'
import { teamsApi } from '.'

import { IAuthRequest, IAuthResponse } from '../interfaces/IAuth'

export function createAuth(auth: IAuthRequest): Promise<AxiosResponse<IAuthResponse>> {
  return teamsApi.post<IAuthResponse>('/auth', auth)
}
