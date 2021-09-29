import { ReactElement } from 'react'

export interface AppbarButton {
  icon: ReactElement
  action: () => void
}

export interface Props {
  greeting: string
  button?: AppbarButton
}
