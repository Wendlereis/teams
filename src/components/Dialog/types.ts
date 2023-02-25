export interface DialogAction {
  label: string
  action: () => void
}

export interface Props {
  open: boolean
  title: string
  children: React.ReactNode
  onClose: () => void
  actions: {
    primary: DialogAction
    secondary: DialogAction
  }
}
