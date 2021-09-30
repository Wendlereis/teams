import { DashboardRounded, EventRounded, GroupRounded, WorkspacesRounded } from '@mui/icons-material'

import List, { ListItem } from '../List'

import { Props } from './types'

import * as S from './styles'

const navigationItems: ListItem[] = [
  {
    icon: <DashboardRounded />,
    text: 'Início',
    selected: true,
  },
  {
    icon: <EventRounded />,
    text: 'Eventos',
  },
  {
    icon: <WorkspacesRounded />,
    text: 'Times',
  },
  {
    icon: <GroupRounded />,
    text: 'Usuarios',
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
