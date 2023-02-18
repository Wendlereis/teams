import { useQuery } from 'react-query'

import { AddRounded, EventRounded } from '@mui/icons-material'
import { Container } from '@mui/material'

import Layout, { MainAction } from '../../components/Layout'
import Board from '../../components/Board'
import PageTitle from '../../components/PageTitle'
import EmptyState from '../../components/EmptyState'
import { useDialog } from '../../components/Dialog'

import { getEvents } from '../../api/event'

import List from './components/List'
import AddEventDialog from './components/AddEventDialog'

function Event(): JSX.Element {
  const [isAddEventDialogOpen, toggleAddEventDialogOpened] = useDialog()

  const { data: getEventsResponse } = useQuery('events', () => getEvents())

  const hasEvents = getEventsResponse?.data && getEventsResponse.data.length > 0

  const layoutMainAction: MainAction = {
    action: toggleAddEventDialogOpened,
    label: 'Adicionar Evento',
    icon: <AddRounded />,
  }

  return (
    <Layout mainAction={layoutMainAction}>
      <Container>
        <PageTitle title="Eventos" subtitle="Gerencie seus eventos." />

        {!hasEvents && (
          <Board>
            <EmptyState
              icon={<EventRounded />}
              title="Nenhum evento criado"
              description="Crie um evento para iniciar."
            />
          </Board>
        )}

        {hasEvents && <List data={getEventsResponse.data} />}

        <AddEventDialog open={isAddEventDialogOpen} onClose={toggleAddEventDialogOpened} />
      </Container>
    </Layout>
  )
}

export default Event
