import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  ${({ theme }) => `
    background-color: ${theme.palette.background.default}
  `}
`

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;

  padding-left: 16px;
  padding-right: 16px;

  width: 100%;

  .MuiTextField-root + .MuiTextField-root {
    margin-top: 16px;
  }

  .MuiButton-root {
    margin-top: 24px;
  }
`
