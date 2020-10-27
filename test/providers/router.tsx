import { RouterContext } from 'next/dist/next-server/lib/router-context'

const mockRouter = {
  basePath: '',
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
}

export function withRouter(children: React.ReactNode): JSX.Element {
  return <RouterContext.Provider value={mockRouter}>{children}</RouterContext.Provider>
}
