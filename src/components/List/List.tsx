import Link from 'next/link'
import { useRouter } from 'next/router'

import { List as MuiList, ListItemIcon, ListItemText } from '@mui/material'

import { Props } from './types'

import * as S from './styles'

function List({ items }: Props): JSX.Element {
  const { route } = useRouter()

  function hasSelectedState(path: string): boolean {
    return path === route
  }

  return (
    <MuiList>
      {items.map(({ icon, text, path }) => (
        <Link key={path} href={path} passHref>
          <S.ListItem selected={hasSelectedState(path)}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{text}</ListItemText>
          </S.ListItem>
        </Link>
      ))}
    </MuiList>
  )
}

export default List
