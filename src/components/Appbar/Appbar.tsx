import Link from 'next/link'
import { useState, MouseEvent } from 'react'

import { Avatar, IconButton, Menu, Typography } from '@mui/material'

import { Props } from './types'

import * as S from './styles'

function Appbar({ greeting, button }: Props): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)
  const greetingFirstLetter = greeting.substring(0, 1)

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <S.AppBar elevation={0} variant="outlined" position="fixed" color="default">
      <S.Toolbar>
        {button && (
          <IconButton size="large" onClick={button.action}>
            {button.icon}
          </IconButton>
        )}

        <S.Profile onClick={handleOpenMenu}>
          <Avatar>
            <Typography color="inherit">{greetingFirstLetter}</Typography>
          </Avatar>

          <Typography color="textSecondary">{greeting}</Typography>
        </S.Profile>
      </S.Toolbar>

      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <S.MenuItem onClick={handleClose}>
          <Link href="/profile" passHref>
            <S.MenuItemLink>Profile</S.MenuItemLink>
          </Link>
        </S.MenuItem>
      </Menu>
    </S.AppBar>
  )
}

export default Appbar
