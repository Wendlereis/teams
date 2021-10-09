import { AxiosResponse } from 'axios'
import { teamsApi } from '.'

import { IEvent, ICreateEventRequest, IGetEventResponse } from '../interfaces/IEvent'

export function createEvent(event: ICreateEventRequest): Promise<AxiosResponse<IEvent>> {
  return teamsApi.post<IEvent>('/event', event)
}

export function getEvents(): Promise<AxiosResponse<IGetEventResponse>> {
  return teamsApi.get<IGetEventResponse>('/event')
}
