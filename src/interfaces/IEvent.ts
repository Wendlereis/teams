export interface IEventRequest {
  name: string
  start_date: string
  final_date: string
  event_type_id: number
}

export interface IEventResponse {
  id: number
  name: string
  start_date: string
  final_date: string
  event_type_id: number
}
