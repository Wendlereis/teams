import '@testing-library/jest-dom'

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Index from '../../src/pages'

import { withRouter } from '../providers/router'
import { withAuthProvider } from '../providers/auth'

const server = setupServer(
  rest.post('/auth', (req, res, ctx) => {
    return res(ctx.json({ token: 'mocked_user_token' }))
  })
)

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

describe('<Index />', () => {
  describe('Login page', () => {
    test('should succesfully authenticate', async () => {
      render(withRouter(withAuthProvider(<Index />)))

      userEvent.type(screen.getByPlaceholderText(/e-mail ou usuário/i), 'johndoe')

      userEvent.type(screen.getByPlaceholderText(/senha/i), 'johndoe')

      userEvent.click(screen.getByRole('button', { name: /entrar/i }))
    })
  })
})
