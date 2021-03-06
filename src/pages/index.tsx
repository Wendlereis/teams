import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import { createAuth } from '../api/auth'

import useAuthenticatedUser from '../hooks/useAuthenticatedUser'

import { IAuthRequest } from '../interfaces/IAuth'

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

      <main>
        <h1>Teams</h1>

        <form>
          <input name="usernameOrEmail" type="text" ref={register} placeholder="E-mail ou usuário" />
          <input name="password" type="password" ref={register} placeholder="Senha" />
          <button onClick={handleSubmit(handleOnSubmit)}>Entrar</button>
        </form>
      </main>
    </div>
  )
}

export default Home
