import { Typography } from '@mui/material'

import { Props } from './types'

import * as S from './styles'

function PageTitle({ title, subtitle }: Props): JSX.Element {
  return (
    <S.Wraper>
      <Typography variant="h2" fontWeight="medium">
        {title}
      </Typography>

      <Typography variant="subtitle1" color="text.secondary">
        {subtitle}
      </Typography>
    </S.Wraper>
  )
}

export default PageTitle
