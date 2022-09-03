import { FC, useState } from 'react'

import { MenuOpenRounded, MenuRounded } from '@mui/icons-material'

import { Box, useMediaQuery, useTheme } from '@mui/material'

import Appbar, { AppbarButton } from '../Appbar'
import NavigationDrawer from '../NavigationDrawer'

import useAuthenticatedUser from '../../hooks/useAuthenticatedUser'

import { Props } from './types'

import * as S from './styles'

const Layout: FC<Props> = ({ children, mainAction }) => {
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

      <S.Main>
        {children}

        {mainAction && (
          <S.FloatingButton variant="extended" color="primary" onClick={mainAction.action}>
            {mainAction.icon}
            <Box ml={1}>{mainAction.label}</Box>
          </S.FloatingButton>
        )}
      </S.Main>
    </S.Wrapper>
  )
}

export default Layout
