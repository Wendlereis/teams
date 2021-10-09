export interface IEvent {
  id: number
  name: string
  start_date: string
  final_date: string
  event_type_id: number
  event_type: {
    name: string
  }
}
export type ICreateEventRequest = Omit<IEvent, 'id' | 'event_type'>

export type IGetEventResponse = IEvent[]
