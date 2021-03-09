import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import { Button, TextField } from '@material-ui/core'

import useAuthenticatedUser from '../hooks/useAuthenticatedUser'

import { createAuth } from '../api/auth'

import { IAuthRequest } from '../interfaces/IAuth'

import * as s from './styles'

const Home: React.FC = () => {
  const router = useRouter()

  const { handleAuthenticatedUser } = useAuthenticatedUser()

  const { handleSubmit, register } = useForm()

  const [createAuthMutation, { data: createAuthResponse }] = useMutation(createAuth)

  function handleOnSubmit({ password, usernameOrEmail }: IAuthRequest) {
    createAuthMutation({ password, usernameOrEmail })
  }

  useEffect(() => {
    if (createAuthResponse) {
      const { data } = createAuthResponse

      localStorage.setItem('@teams:authToken', data.token)
      handleAuthenticatedUser(data)

      router.push('/home')
    }
  }, [createAuthResponse])

  return (
    <div>
      <Head>
        <title>Teams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <s.Wrapper>
        <s.SignInForm>
          <TextField
            name="usernameOrEmail"
            ref={register}
            color="primary"
            label="E-mail ou usuário"
            variant="outlined"
          />

          <TextField name="password" ref={register} color="primary" label="Senha" variant="outlined" type="password" />

          <Button variant="contained" color="primary" onClick={handleSubmit(handleOnSubmit)}>
            Entrar
          </Button>
        </s.SignInForm>
      </s.Wrapper>
    </div>
  )
}

export default Home
