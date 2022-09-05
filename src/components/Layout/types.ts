export interface MainAction {
  label: string
  action: () => void
  icon?: React.ReactElement
}

export interface Props {
  mainAction?: MainAction
}
