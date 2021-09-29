import styled from '@emotion/styled'

import { AppBar as MuiAppBar, Toolbar as MuiToolbar } from '@mui/material'

export const AppBar = styled(MuiAppBar)`
  ${({ theme: { breakpoints, zIndex } }) => `
    z-index: ${zIndex.drawer + 1};

    ${breakpoints.up('md')} {
      z-index: ${zIndex.appBar};
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
