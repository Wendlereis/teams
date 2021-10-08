import { ReactElement } from 'react'

export interface ListItem {
  icon: ReactElement
  text: string
  path: string
}

export interface Props {
  items: ListItem[]
}
