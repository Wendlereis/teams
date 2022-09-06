import { Button, DialogActions, DialogContent as MuiDialogContent, DialogTitle } from '@mui/material'

import { Props } from './types'

function DialogContent({ title, actions, children }: Omit<Props, 'open'>): JSX.Element {
  return (
    <>
      <DialogTitle>{title}</DialogTitle>

      <MuiDialogContent>{children}</MuiDialogContent>

      <DialogActions>
        <Button variant="contained" onClick={actions.primary.action}>
          {actions.primary.label}
        </Button>

        <Button variant="outlined" color="secondary" onClick={actions.secondary.action}>
          {actions.secondary.label}
        </Button>
      </DialogActions>
    </>
  )
}

export default DialogContent
