import { Drawer, Dialog as MuiDialog } from '@mui/material'

import useResponsiveness from '../../hooks/useResponsiveness'

import DialogContent from './DialogContent'

import { Props } from './types'

function Dialog({ open, title, actions, children, onClose }: Props): JSX.Element {
  const { isDesktop } = useResponsiveness()

  return isDesktop ? (
    <MuiDialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { minWidth: 350 },
      }}
    >
      <DialogContent title={title} actions={actions}>
        {children}
      </DialogContent>
    </MuiDialog>
  ) : (
    <Drawer
      open={open}
      variant="temporary"
      anchor="bottom"
      onClose={onClose}
      PaperProps={{
        sx: { maxHeight: '65%' },
      }}
    >
      <DialogContent title={title} actions={actions}>
        {children}
      </DialogContent>
    </Drawer>
  )
}

export default Dialog
