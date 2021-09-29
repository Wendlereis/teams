import { FC, useState } from 'react'

import { InboxRounded, MenuOpenRounded, MenuRounded } from '@mui/icons-material'

import { List, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material'

import Appbar, { AppbarButton } from '../Appbar'

import useAuthenticatedUser from '../../hooks/useAuthenticatedUser'

import * as S from './styles'

const Layout: FC = ({ children }) => {
  const { breakpoints } = useTheme()
  const isDesktop = useMediaQuery(breakpoints.up('md'))

  const [drawerOpen, setDrawerOpen] = useState(false)

  const { authenticatedUser } = useAuthenticatedUser()

  const drawerVariant = isDesktop ? 'permanent' : 'temporary'

  function handleToggleDrawer() {
    setDrawerOpen(!drawerOpen)
  }

  function handleCloseDrawer() {
    setDrawerOpen(false)
  }

  function getAppbarButton() {
    const buttonOptions: AppbarButton = {
      icon: drawerOpen ? <MenuOpenRounded /> : <MenuRounded />,
      action: handleToggleDrawer,
    }

    return !isDesktop ? buttonOptions : undefined
  }

  return (
    <S.Wrapper>
      <Appbar greeting={authenticatedUser.name} button={getAppbarButton()} />

      <S.Drawer
        open={drawerOpen}
        elevation={0}
        variant={drawerVariant}
        onClose={handleCloseDrawer}
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

      <S.Main>{children}</S.Main>
    </S.Wrapper>
  )
}

export default Layout
