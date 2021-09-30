import { ReactElement } from 'react'

export interface ListItem {
  icon: ReactElement
  text: string
  selected?: boolean
}

export interface Props {
  items: ListItem[]
}
