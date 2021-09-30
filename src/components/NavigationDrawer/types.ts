import { DrawerProps } from '@mui/material'

export interface Props {
  open: boolean
  variant: DrawerProps['variant']
  onClose: () => void
}
