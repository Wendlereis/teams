import styled from '@emotion/styled'

import { ListItem as MuiListItem } from '@mui/material'

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
