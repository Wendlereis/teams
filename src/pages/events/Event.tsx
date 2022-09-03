import { useQuery } from 'react-query'

import { AddRounded, EventRounded } from '@mui/icons-material'
import { Chip, Container, Paper, Typography } from '@mui/material'

import { format } from '../../libs/date-fns'

import Layout, { MainAction } from '../../components/Layout'
import Board from '../../components/Board'
import PageTitle from '../../components/PageTitle'
import EmptyState from '../../components/EmptyState'

import { getEvents } from '../../api/event'

function Event(): JSX.Element {
  const { data: getEventsResponse } = useQuery('events', () => getEvents())

  const hasEvents = getEventsResponse?.data && getEventsResponse.data.length > 0

  const layoutMainAction: MainAction = {
    action: () => {},
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

        {hasEvents && (
          <Board>
            {getEventsResponse?.data.map(event => (
              <Paper key={event.id} variant="outlined">
                <Typography>{event.name}</Typography>
                <Chip color="secondary" label={event.event_type.name} size="small" />
                <Typography>{format(new Date(event.start_date))}</Typography>
                <Typography>{format(new Date(event.final_date))}</Typography>
              </Paper>
            ))}
          </Board>
        )}
      </Container>
    </Layout>
  )
}

export default Event
