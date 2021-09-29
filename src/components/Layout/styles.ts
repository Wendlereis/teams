import styled from '@emotion/styled'

import {
  AppBar as MuiAppBar,
  Drawer as MuiDrawer,
  ListItem as MuiListItem,
  Toolbar as MuiToolbar,
  Typography,
} from '@mui/material'

export const Wrapper = styled.section`
  display: flex;
`

export const AppBar = styled(MuiAppBar)`
  ${({ theme: { breakpoints, zIndex } }) => `
    z-index: ${zIndex.drawer + 1};

    ${breakpoints.up('md')} {
      z-index: ${zIndex.appBar};
    }
  `}
`

export const Drawer = styled(MuiDrawer)`
  ${({ theme: { breakpoints, palette } }) => `
    & .MuiPaper-root {
      padding-top: 56px;
      padding-left: 16px;
      padding-right: 16px;

      width: 70%;

      background-color: ${palette.background.default};

      ${breakpoints.up('md')} {
        flex-shrink: 0;
        padding-top: 0px;
        max-width: 300px;
      }
    }

    ${breakpoints.up('md')} {
      width: 300px;
    }
  `}
`

export const DrawerTitle = styled(Typography)`
  margin-top: 24px;
`

export const ListItem = styled(MuiListItem)`
  ${({ theme: { palette } }) => `
    &.Mui-selected {
      background-color: ${palette.secondary.main};
      color: ${palette.common.white};

      &:hover {
        background-color: ${palette.secondary.light};
      }

      & .MuiSvgIcon-root {
        fill: ${palette.common.white};
      }
    }

    &:hover {
      background-color: ${palette.action.hover};
      cursor: pointer;
    }
  `}
`

export const Toolbar = styled(MuiToolbar)`
  ${({ theme: { breakpoints } }) => `
      display: flex;
      justify-content: space-between;

      ${breakpoints.up('sm')} {
        flex-direction: row-reverse;
      }
  `}
`

export const Profile = styled.section`
  ${({ theme: { palette } }) => `
    display: flex;
    align-items: center;

    padding: 8px 12px;

    border-radius: 8px;

    &:hover {
      background-color: ${palette.secondary.main};
      transition: all .6s;
      cursor: pointer;

      & > p {
        color: ${palette.background.default};
      }

      & .MuiAvatar-root {
        background-color: ${palette.secondary.dark};
      }
    }

    & > .MuiTypography-root {
      margin-right: 8px;
    }

    & .MuiAvatar-root {
      background-color: ${palette.secondary.main};

      width: 32px;
      height: 32px;
    }
  `}
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
