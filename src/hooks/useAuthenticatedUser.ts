import { useContext } from 'react'
import { AuthContext } from '../context/auth'

import { IAuthContext } from '../interfaces/IAuth'

function useAuthenticatedUser(): IAuthContext {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuthenticatedUser must be used within a AuthProvider')
  }

  return context
}

export default useAuthenticatedUser
