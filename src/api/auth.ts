import { teamsApi } from '.'

import { IAuthRequest, IAuthResponse } from '../interfaces/IAuth'

export function createAuth(auth: IAuthRequest): Promise<IAuthResponse> {
  return teamsApi.post('/auth', auth)
}
