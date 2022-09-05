import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'

import { IEvent } from '../../../../interfaces/IEvent'

import { format } from '../../../../libs/date-fns'

import { Props } from './types'

function EventList({ data }: Props): JSX.Element {
  function getSecondaryText(event: IEvent) {
    return `${format(new Date(event.start_date))} - ${format(new Date(event.final_date))}`
  }

  return (
    <List>
      {data.map(event => (
        <Paper key={event.id}>
          <ListItem sx={{ mb: 2 }}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'secondary.main' }}>
                <Typography color="inherit">{event.event_type.name}</Typography>
              </Avatar>
            </ListItemAvatar>

            <ListItemText primary={event.name} secondary={getSecondaryText(event)} />
          </ListItem>
        </Paper>
      ))}
    </List>
  )
}

export default EventList
