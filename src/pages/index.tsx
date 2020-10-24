import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import { IAuthRequest } from '../interfaces/IAuth'

import { createAuth } from '../api/auth'

const Home: React.FC = () => {
  const router = useRouter()

  const { handleSubmit, register } = useForm()

  const [createAuthMutation, { isSuccess: isCreateAuthSuccess }] = useMutation(createAuth)

  function handleOnSubmit(values: IAuthRequest) {
    createAuthMutation(values)

    isCreateAuthSuccess && router.push('/home')
  }

  return (
    <div>
      <Head>
        <title>Teams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Teams</h1>

        <form>
          <input name="usernameOrEmail" type="text" ref={register} />
          <input name="password" type="password" ref={register} />
          <button onClick={handleSubmit(handleOnSubmit)}>Entrar</button>
        </form>
      </main>
    </div>
  )
}

export default Home
