import { FC, useState } from 'react'

import { InboxRounded, MenuOpenRounded, MenuRounded } from '@mui/icons-material'

import {
  Avatar,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import useAuthenticatedUser from '../../hooks/useAuthenticatedUser'

import * as S from './styles'

const Layout: FC = ({ children }) => {
  const { breakpoints } = useTheme()
  const matches = useMediaQuery(breakpoints.up('md'))

  const [drawerOpen, setDrawerOpen] = useState(false)

  const { authenticatedUser } = useAuthenticatedUser()

  const drawerVariant = matches ? 'permanent' : 'temporary'

  function handleToggleDrawer() {
    setDrawerOpen(!drawerOpen)
  }

  function handleCloseDrawer() {
    setDrawerOpen(false)
  }

  return (
    <S.Wrapper>
      <S.AppBar variant="outlined" position="fixed" color="default">
        <S.Toolbar>
          {!matches && (
            <IconButton size="large" onClick={handleToggleDrawer}>
              {drawerOpen ? <MenuOpenRounded /> : <MenuRounded />}
            </IconButton>
          )}

          <S.Profile>
            <Typography color="textSecondary">{authenticatedUser.name}</Typography>

            <Avatar>
              <Typography color="inherit">J</Typography>
            </Avatar>
          </S.Profile>
        </S.Toolbar>
      </S.AppBar>

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
