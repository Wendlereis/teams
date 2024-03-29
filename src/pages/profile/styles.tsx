import styled from '@emotion/styled'

import { Paper as MuiPaper, Typography as MuiTypography } from '@mui/material'

export const Form = styled.form`
  margin-top: 32px;
`

export const BoardWrapper = styled.section`
  margin-bottom: 48px;
`

export const Board = styled(MuiPaper)`
  padding: 24px 24px 16px 24px;
`

export const BoardTitle = styled(MuiTypography)`
  margin-bottom: 16px;
`

export const ButtonWrapper = styled.section`
  display: flex;
  justify-content: flex-end;

  margin-top: 32px;
  margin-bottom: 80px;
`
