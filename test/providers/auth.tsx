import AuthProvider from '../../src/context/auth'

export function withAuthProvider(children: React.ReactNode): JSX.Element {
  return <AuthProvider>{children}</AuthProvider>
}
