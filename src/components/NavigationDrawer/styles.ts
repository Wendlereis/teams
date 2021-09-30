import styled from '@emotion/styled'

import { Drawer as MuiDrawer, ListItem as MuiListItem, Typography } from '@mui/material'

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

export const Content = styled.main`
  margin-top: 16px;
`
