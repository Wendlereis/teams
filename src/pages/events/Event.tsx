import { useQuery } from 'react-query'

import { Chip, Container, Paper, Typography } from '@mui/material'

import Board from '../../components/Board'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'

import { getEvents } from '../../api/event'

function Event(): JSX.Element {
  const { data: getEventsResponse } = useQuery('events', () => getEvents())

  return (
    <Layout>
      <Container>
        <PageTitle title="Eventos" subtitle="Gerencie seus eventos." />

        <Board>
          {getEventsResponse?.data.map(event => (
            <Paper key={event.id} variant="outlined">
              <Typography>{event.name}</Typography>
              <Chip color="secondary" label={event.event_type.name} size="small" />
              <Typography>{event.start_date}</Typography>
              <Typography>{event.final_date}</Typography>
            </Paper>
          ))}
        </Board>
      </Container>
    </Layout>
  )
}

export default Event
