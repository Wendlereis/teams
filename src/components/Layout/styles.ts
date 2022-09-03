import styled from '@emotion/styled'

import { Fab } from '@mui/material'

export const Wrapper = styled.section`
  display: flex;
`

export const Main = styled.main`
  ${({ theme: { breakpoints, palette } }) => `
    flex-grow: 1;

    padding-top: 56px;

    min-height: 100vh;

    background-color: ${palette.background.default};

    ${breakpoints.up('md')} {
      padding-top: 64px;
    }
  `}
`

export const FloatingButton = styled(Fab)`
  ${({ theme: { breakpoints, spacing } }) => `
    position: absolute;
    bottom: ${spacing(3)};
    right: ${spacing(2)};

    ${breakpoints.up('md')} {
      bottom: ${spacing(5)};
      right: ${spacing(6)};
    }
  `}
`
