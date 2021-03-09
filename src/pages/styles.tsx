import { Paper, Typography } from '@material-ui/core'
import styled from 'styled-components'

export const Page = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-left: 16px;
  padding-right: 16px;

  height: 100vh;

  ${({ theme }) => `
    background-color: ${theme.palette.secondary.main}
  `}
`

export const Wrapper = styled(Paper)`
  padding: 32px 24px 24px;

  width: 100%;
  max-width: 400px;
`

export const Title = styled(Typography)`
  font-weight: 900;
`

export const Subtitle = styled(Typography)`
  margin-top: 8px;
  font-weight: 400;
`

export const FormHeader = styled.header`
  margin-bottom: 32px;
`

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;

  .MuiTextField-root + .MuiTextField-root {
    margin-top: 8px;
  }

  .MuiButton-root {
    margin-top: 32px;
  }
`

export const Caption = styled(Typography)`
  margin-top: 16px;
  text-align: center;
`
