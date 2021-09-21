import '@testing-library/jest-dom'

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Index from '../../src/pages'

import render from '../utils/render'

const mockPush = jest.fn()

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { options: 'integrations' },
    push: mockPush,
  }),
}))

const server = setupServer(
  rest.post('/auth', (req, res, ctx) => {
    return res(ctx.json({ token: 'mocked_user_token' }))
  })
)

describe('<Index />', () => {
  describe('Login page', () => {
    server.listen()

    test('should authenticate succesfully', async () => {
      render(<Index />)

      userEvent.type(screen.getByLabelText('E-mail ou usuário'), 'johndoe')

      userEvent.type(screen.getByLabelText('Senha'), 'johndoe')

      userEvent.click(screen.getByRole('button', { name: /entrar/i }))

      await waitFor(() => {
        expect(mockPush).toBeCalled()
        expect(mockPush).toBeCalledWith('/home')
      })
    })
  })
})
