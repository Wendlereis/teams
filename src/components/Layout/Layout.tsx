import { FC, useState } from 'react'

import { MenuOpenRounded, MenuRounded } from '@mui/icons-material'

import { useMediaQuery, useTheme } from '@mui/material'

import Appbar, { AppbarButton } from '../Appbar'
import NavigationDrawer from '../NavigationDrawer'

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

      <NavigationDrawer open={drawerOpen} variant={drawerVariant} onClose={handleCloseDrawer} />

      <S.Main>{children}</S.Main>
    </S.Wrapper>
  )
}

export default Layout
