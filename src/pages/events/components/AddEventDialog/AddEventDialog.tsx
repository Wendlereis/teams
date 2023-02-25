import { useMutation } from 'react-query'
import { useForm, FormProvider } from 'react-hook-form'

import { ICreateEventRequest } from '../../../../interfaces/IEvent'

import Dialog from '../../../../components/Dialog'
import Input from '../../../../components/Input'

import { createEvent } from '../../../../api/event'

import { Props } from './types'

function AddEventDialog({ open, onClose }: Props): JSX.Element {
  const methods = useForm()

  const [createEventMutation, { isLoading }] = useMutation(createEvent)

  const actions = {
    primary: {
      label: 'Criar',
      action: methods.handleSubmit(handleCreateEvent),
      loading: isLoading,
    },
    secondary: {
      label: 'Cancelar',
      action: onClose,
    },
  }

  function handleCreateEvent(event: ICreateEventRequest) {
    createEventMutation(event)
  }

  return (
    <Dialog open={open} title="Criar novo evento" actions={actions} onClose={onClose}>
      <FormProvider {...methods}>
        <Input label="Nome" name="name" />
        <Input label="Data de inicio" name="start_date" />
        <Input label="Data de encerramento" name="final_date" />
        <Input
          label="Tipo do evento"
          name="event_type_id"
          options={{
            items: [
              { label: 'EJC', value: 1 },
              { label: 'ECC', value: 2 },
              { label: 'EPC', value: 3 },
            ],
          }}
        />
      </FormProvider>
    </Dialog>
  )
}

export default AddEventDialog
