import { DashboardRounded, EventRounded, GroupRounded, WorkspacesRounded } from '@mui/icons-material'

import List, { ListItem } from '../List'

import { Props } from './types'

import * as S from './styles'

const navigationItems: ListItem[] = [
  {
    icon: <DashboardRounded />,
    text: 'Início',
    path: '/home',
  },
  {
    icon: <EventRounded />,
    text: 'Eventos',
    path: '/events',
  },
  {
    icon: <WorkspacesRounded />,
    text: 'Times',
    path: '/teams',
  },
  {
    icon: <GroupRounded />,
    text: 'Usuarios',
    path: '/users',
  },
]

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

      <S.Content>
        <List items={navigationItems} />
      </S.Content>
    </S.Drawer>
  )
}

export default NavigationDrawer
