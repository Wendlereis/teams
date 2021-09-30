import { List as MuiList, ListItemIcon, ListItemText } from '@mui/material'

import { Props } from './types'

import * as S from './styles'

function List({ items }: Props): JSX.Element {
  return (
    <MuiList>
      {items.map(({ icon, text, selected }) => (
        <S.ListItem key={text} selected={selected}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText>{text}</ListItemText>
        </S.ListItem>
      ))}
    </MuiList>
  )
}

export default List
