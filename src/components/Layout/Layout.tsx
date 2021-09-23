import { useState } from 'react'

import { MenuOpenRounded, MenuRounded } from '@mui/icons-material'
import { IconButton, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'

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

      <S.Drawer open={drawerOpen} variant={drawerVariant} onClose={handleCloseDrawer}>
        <Toolbar />
        <Typography>Blah</Typography>
      </S.Drawer>
    </>
  )
}

export default Layout
