import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import { IEventRequest } from '../../interfaces/IEvent'

import { createAuth } from '../../api/event'

const CreateEvent: React.FC = () => {
  const { handleSubmit } = useForm()

  const [createEventMutation, { data }] = useMutation(createAuth)

  function handleCreateEvent(event: IEventRequest) {
    createEventMutation(event)
  }

  return (
    <>
      <h1>Crie um evento</h1>

      <input type="text" name="name" />

      <input type="date" name="start_date" />

      <input type="date" name="final_date" />

      <select name="event_type_id">
        <option value="1">EJC</option>
        <option value="2">ECC</option>
        <option value="3">EPC</option>
      </select>

      <button onClick={handleSubmit(handleCreateEvent)}>Criar evento</button>

      {data && JSON.stringify(data.data)}
    </>
  )
}

export default CreateEvent
