import { InboxRounded } from '@mui/icons-material'

import { List, ListItemIcon, ListItemText } from '@mui/material'

import { Props } from './types'

import * as S from './styles'

function NavigationDrawer({ open, variant, onClose }: Props): JSX.Element {
  return (
    <S.Drawer
      open={open}
      elevation={0}
      variant={variant}
      onClose={onClose}
      PaperProps={{ variant: 'outlined' }}
      anchor="left"
    >
      <S.DrawerTitle variant="h6">Teams</S.DrawerTitle>

      <List>
        <S.ListItem>
          <ListItemIcon>
            <InboxRounded />
          </ListItemIcon>

          <ListItemText>Inicio</ListItemText>
        </S.ListItem>

        <S.ListItem selected>
          <ListItemIcon>
            <InboxRounded />
          </ListItemIcon>

          <ListItemText>Eventos</ListItemText>
        </S.ListItem>

        <S.ListItem>
          <ListItemIcon>
            <InboxRounded />
          </ListItemIcon>

          <ListItemText>Times</ListItemText>
        </S.ListItem>

        <S.ListItem>
          <ListItemIcon>
            <InboxRounded />
          </ListItemIcon>

          <ListItemText>Usuarios</ListItemText>
        </S.ListItem>
      </List>
    </S.Drawer>
  )
}

export default NavigationDrawer
