import { useRouter } from 'next/router'

import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import { ICreateUserRequest } from '../../interfaces/IUser'

import { createUser } from '../../api/user'
import { useEffect } from 'react'

const Signup: React.FC = () => {
  const router = useRouter()

  const { handleSubmit, register } = useForm()

  const [createUserMutation, { isSuccess: isCreateUserSuccess }] = useMutation(createUser)

  function handleOnSubmit(user: ICreateUserRequest) {
    createUserMutation({ ...user, system_role_id: 1 })
  }

  useEffect(() => {
    isCreateUserSuccess && router.push('/')
  }, [isCreateUserSuccess])

  return (
    <main>
      <h1>Cadastre-se</h1>
      <input name="name" type="text" ref={register} placeholder="Nome" />
      <input name="email" type="text" ref={register} placeholder="E-mail" />
      <input name="username" type="text" ref={register} placeholder="Usuário" />
      <input name="password" type="password" ref={register} placeholder="Senha" />
      <button onClick={handleSubmit(handleOnSubmit)}>Salvar</button>
    </main>
  )
}

export default Signup
