import styled from '@emotion/styled'

export const Wrapper = styled.section`
  display: flex;
`

export const Main = styled.main`
  ${({ theme: { breakpoints, palette } }) => `
    flex-grow: 1;

    padding-top: 56px;

    min-height: 100vh;

    background-color: ${palette.background.default};

    ${breakpoints.up('sm')} {
      padding-top: 64px;
    }
  `}
`
