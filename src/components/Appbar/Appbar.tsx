import { Avatar, IconButton, Typography } from '@mui/material'

import { Props } from './types'

import * as S from './styles'

function Appbar({ greeting, button }: Props): JSX.Element {
  const greetingFirstLetter = greeting.substring(0, 1)

  return (
    <S.AppBar variant="outlined" position="fixed" color="default">
      <S.Toolbar>
        {button && (
          <IconButton size="large" onClick={button.action}>
            {button.icon}
          </IconButton>
        )}

        <S.Profile>
          <Typography color="textSecondary">{greeting}</Typography>

          <Avatar>
            <Typography color="inherit">{greetingFirstLetter}</Typography>
          </Avatar>
        </S.Profile>
      </S.Toolbar>
    </S.AppBar>
  )
}

export default Appbar
