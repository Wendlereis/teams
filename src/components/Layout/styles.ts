import styled from '@emotion/styled'
import { AppBar as MuiAppBar, Drawer as MuiDrawer, Typography } from '@mui/material'

export const AppBar = styled(MuiAppBar)`
  ${({ theme: { zIndex, breakpoints } }) => `
    z-index: ${zIndex.drawer + 1};

    ${breakpoints.up('md')} {
      z-index: ${zIndex.appBar};
    }
  `}
`

export const Drawer = styled(MuiDrawer)`
  ${({ theme: { breakpoints } }) => `
    & .MuiPaper-root {
      padding-top: 56px;
      padding-left: 16px;
      padding-right: 16px;

      width: 70%;

      ${breakpoints.up('md')} {
        width: 300px;
      }
    }
  `}
`

export const DrawerTitle = styled(Typography)`
  margin-top: 24px;
`

export const Main = styled.main`
  ${({ theme: { palette } }) => `
    padding-top: 56px;

    height: 100vh;

    background-color: ${palette.background.default}
  `}
`
