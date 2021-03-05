import { createContext, FC, useState } from 'react'
import { IAuthContext, IAuthContextState } from '../interfaces/IAuth'

export const AuthContext = createContext<IAuthContext | undefined>(undefined)

const DEFAULT_USER = {
  id: 0,
  name: '',
  email: '',
  token: '',
}

const AuthProvider: FC = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = useState<IAuthContextState>(DEFAULT_USER)

  function handleAuthenticatedUser(user: IAuthContextState) {
    setAuthenticatedUser(user)
  }

  return <AuthContext.Provider value={{ authenticatedUser, handleAuthenticatedUser }}>{children}</AuthContext.Provider>
}

export default AuthProvider
