import { useMediaQuery, useTheme } from '@mui/material'

interface UseResponsiveness {
  isDesktop: boolean
}

function useResponsiveness(): UseResponsiveness {
  const { breakpoints } = useTheme()

  const isDesktop = useMediaQuery(breakpoints.up('md'))

  return { isDesktop }
}

export default useResponsiveness
