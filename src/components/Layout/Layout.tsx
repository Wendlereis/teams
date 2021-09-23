import { useState } from 'react'

import { InboxRounded, MenuOpenRounded, MenuRounded } from '@mui/icons-material'
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import { Props } from './types'

import * as S from './styles'

function Layout({ children }: Props): JSX.Element {
  const { breakpoints } = useTheme()
  const matches = useMediaQuery(breakpoints.up('md'))

  const [drawerOpen, setDrawerOpen] = useState(false)

  const drawerVariant = matches ? 'permanent' : 'temporary'

  function handleToggleDrawer() {
    setDrawerOpen(!drawerOpen)
  }

  function handleCloseDrawer() {
    setDrawerOpen(false)
  }

  return (
    <>
      <S.AppBar position="fixed">
        <Toolbar>
          <IconButton size="large" color="secondary" onClick={handleToggleDrawer}>
            {drawerOpen ? <MenuOpenRounded /> : <MenuRounded />}
          </IconButton>
        </Toolbar>
      </S.AppBar>

      <S.Main>{children}</S.Main>

      <S.Drawer
        open={drawerOpen}
        elevation={0}
        variant={drawerVariant}
        onClose={handleCloseDrawer}
        PaperProps={{ variant: 'outlined' }}
      >
        <S.DrawerTitle variant="h6">Teams</S.DrawerTitle>

        <List>
          <ListItem button>
            <ListItemIcon>
              <InboxRounded />
            </ListItemIcon>

            <ListItemText>Item 1</ListItemText>
          </ListItem>

          <ListItem selected>
            <ListItemIcon>
              <InboxRounded />
            </ListItemIcon>

            <ListItemText>Item 2</ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <InboxRounded />
            </ListItemIcon>

            <ListItemText>Item 3</ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <InboxRounded />
            </ListItemIcon>

            <ListItemText>Item 4</ListItemText>
          </ListItem>
        </List>
      </S.Drawer>
    </>
  )
}

export default Layout
