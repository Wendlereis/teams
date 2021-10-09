import { AxiosResponse } from 'axios'
import { teamsApi } from '.'

export function createEvent(event: ICreateEventRequest): Promise<AxiosResponse<IEvent>> {
  return teamsApi.post<IEvent>('/event', event)
}

export function createAuth(event: IEventRequest): Promise<AxiosResponse<IEventResponse>> {
  return teamsApi.post<IEventResponse>('/event', event)
}
