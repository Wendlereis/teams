import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import { IAuthRequest } from '../interfaces/IAuth'

import { createAuth } from '../api/auth'

const Home: React.FC = () => {
  const router = useRouter()

  const { handleSubmit, register } = useForm()

  const [createAuthMutation, { isSuccess: isCreateAuthSuccess, data: createAuthResponse }] = useMutation(createAuth)

  function handleOnSubmit({ password, usernameOrEmail }: IAuthRequest) {
    createAuthMutation({ password, usernameOrEmail })

    isCreateAuthSuccess && router.push('/home')
  }

  useEffect(() => {
    if (createAuthResponse) {
      localStorage.setItem('@teams:authToken', createAuthResponse.data.token)
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
