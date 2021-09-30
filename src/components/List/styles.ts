import styled from '@emotion/styled'

import { List as MuiList, ListItem as MuiListItem } from '@mui/material'

export const List = styled(MuiList)`
  margin-top: 16px;
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
