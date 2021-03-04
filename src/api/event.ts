import { AxiosResponse } from 'axios'
import { teamsApi } from '.'

import { IEventRequest, IEventResponse } from '../interfaces/IEvent'

export function createAuth(event: IEventRequest): Promise<AxiosResponse<IEventResponse>> {
  return teamsApi.post<IEventResponse>('/event', event)
}
