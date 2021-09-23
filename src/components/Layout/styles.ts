import styled from '@emotion/styled'
import { AppBar as MuiAppBar, Drawer as MuiDrawer } from '@mui/material'

export const AppBar = styled(MuiAppBar)`
  ${({ theme: { zIndex, breakpoints } }) => `
    z-index: ${zIndex.drawer + 1}
  `}
`

export const Drawer = styled(MuiDrawer)`
  ${({ theme: { breakpoints } }) => `
    & .MuiPaper-root {
      width: 70%;
    }
  `}
`

export const Main = styled.main`
  ${({ theme: { palette } }) => `
    padding-top: 56px;

    height: 100vh;

    background-color: ${palette.background.default}
  `}
`
