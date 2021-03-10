import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { useForm, Controller } from 'react-hook-form'
import { useMutation } from 'react-query'

import { Button, Link, TextField, Typography } from '@material-ui/core'

import useAuthenticatedUser from '../hooks/useAuthenticatedUser'

import { createAuth } from '../api/auth'

import { IAuthRequest } from '../interfaces/IAuth'

import * as s from './styles'

const Home: React.FC = () => {
  const router = useRouter()

  const { handleAuthenticatedUser } = useAuthenticatedUser()

  const { handleSubmit, control } = useForm()

  const [createAuthMutation, { data: createAuthResponse }] = useMutation(createAuth)

  function handleOnSubmit({ password, usernameOrEmail }: IAuthRequest) {
    console.log({ password, usernameOrEmail })

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
    <>
      <Head>
        <title>Teams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <s.Page>
        <s.Wrapper variant="outlined" elevation={0}>
          <s.FormHeader>
            <s.Title variant="h3" color="textPrimary">
              Bem vindo!
            </s.Title>

            <s.Subtitle variant="subtitle1" color="textSecondary">
              Faça seu login para entrar.
            </s.Subtitle>
          </s.FormHeader>

          <s.SignInForm>
            <Controller
              name="usernameOrEmail"
              as={TextField}
              control={control}
              variant="outlined"
              color="primary"
              label="E-mail ou usuário"
              size="small"
              defaultValue=""
            />

            <Controller
              name="password"
              as={TextField}
              control={control}
              variant="outlined"
              color="primary"
              label="Senha"
              type="password"
              size="small"
              defaultValue=""
            />

            <Button variant="contained" color="primary" onClick={handleSubmit(handleOnSubmit)}>
              Entrar
            </Button>

            <s.Caption variant="caption" color="textSecondary">
              Ainda não tem uma conta? <Link href="/signup">Cadastre-se</Link>
            </s.Caption>
          </s.SignInForm>
        </s.Wrapper>
      </s.Page>
    </>
  )
}

export default Home
