import { Box, Typography } from '@mui/material'

import { Props } from './types'

import * as S from './styles'

function EmptyState({ icon, title, description }: Props): JSX.Element {
  return (
    <Box>
      <S.IconWrapper>{icon}</S.IconWrapper>

      <Typography variant="h4">{title}</Typography>

      <Typography color="textSecondary" mt={1}>
        {description}
      </Typography>
    </Box>
  )
}

export default EmptyState
