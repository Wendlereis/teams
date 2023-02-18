interface ButtonAction {
  label: string
  action: () => void
}

export interface Props {
  open: boolean
  title: string
  children: React.ReactElement
  actions: {
    primary: ButtonAction
    secondary: ButtonAction
  }
}
