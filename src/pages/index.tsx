import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import styled from '@emotion/styled'

import { useForm, Controller } from 'react-hook-form'
import { useMutation } from 'react-query'

import { Button, Link, Paper, TextField, Typography } from '@mui/material'

import useAuthenticatedUser from '../hooks/useAuthenticatedUser'

import { createAuth } from '../api/auth'

import { IAuthRequest } from '../interfaces/IAuth'

const Index: React.FC = () => {
  const router = useRouter()

  const { handleAuthenticatedUser } = useAuthenticatedUser()

  const { handleSubmit, control } = useForm()

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
    <>
      <Head>
        <title>Teams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <Wrapper variant="outlined" elevation={0}>
          <FormHeader>
            <Title variant="h3" color="textPrimary">
              Bem vindo!
            </Title>

            <Subtitle variant="subtitle1" color="textSecondary">
              Faça seu login para entrar.
            </Subtitle>
          </FormHeader>

          <SignInForm>
            <Controller
              id="usernameOrEmail"
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
              id="password"
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

            <Caption variant="caption" color="textSecondary">
              Ainda não tem uma conta? <Link href="/signup">Cadastre-se</Link>
            </Caption>
          </SignInForm>
        </Wrapper>
      </Page>
    </>
  )
}

export default Index

export const Page = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-left: 16px;
  padding-right: 16px;

  height: 100vh;

  ${({ theme }) => `
    background-color: ${theme.palette.secondary.main}
  `}
`

export const Wrapper = styled(Paper)`
  padding: 32px 24px 24px;

  width: 100%;
  max-width: 350px;
`

export const Title = styled(Typography)`
  font-weight: 900;
`

export const Subtitle = styled(Typography)`
  font-weight: 400;
`

export const FormHeader = styled.header`
  margin-bottom: 32px;
`

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;

  .MuiTextField-root + .MuiTextField-root {
    margin-top: 16px;
  }

  .MuiButton-root {
    margin-top: 24px;
  }
`

export const Caption = styled(Typography)`
  margin-top: 16px;
  text-align: center;
`
