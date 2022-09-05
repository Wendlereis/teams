import { Button, Dialog as MuiDialog, DialogActions, DialogContent, DialogTitle, Drawer } from '@mui/material'

import useResponsiveness from '../../hooks/useResponsiveness'

import { Props } from './types'

function Dialog({ open, title, actions, children }: Props): JSX.Element {
  const { isDesktop } = useResponsiveness()

  return isDesktop ? (
    <MuiDialog open={open}>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>{children}</DialogContent>

      <DialogActions>
        <Button variant="contained" onClick={actions.primary.action}>
          {actions.primary.label}
        </Button>
        <Button variant="outlined" color="secondary" onClick={actions.secondary.action}>
          {actions.secondary.label}
        </Button>
      </DialogActions>
    </MuiDialog>
  ) : (
    <Drawer
      open={open}
      variant="temporary"
      anchor="bottom"
      PaperProps={{
        sx: { maxHeight: '65%' },
      }}
    >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>{children}</DialogContent>

      <DialogActions>
        <Button variant="contained" onClick={actions.primary.action}>
          {actions.primary.label}
        </Button>
        <Button variant="outlined" color="secondary" onClick={actions.secondary.action}>
          {actions.secondary.label}
        </Button>
      </DialogActions>
    </Drawer>
  )
}

export default Dialog
