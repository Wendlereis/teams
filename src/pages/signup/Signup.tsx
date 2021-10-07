import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

import { FormProvider, useForm } from 'react-hook-form'

import Input from '../../components/Input'

import { ICreateUserRequest } from '../../interfaces/IUser'

import { createUser } from '../../api/user'
import { useEffect } from 'react'

const Signup: React.FC = () => {
  const methods = useForm()
  const router = useRouter()

  const { handleSubmit } = useForm()

  const [createUserMutation, { isSuccess: isCreateUserSuccess }] = useMutation(createUser)

  function handleOnSubmit(user: ICreateUserRequest) {
    createUserMutation({ ...user, system_role_id: 1 })
  }

  useEffect(() => {
    isCreateUserSuccess && router.push('/')
  }, [isCreateUserSuccess])

  return (
    <FormProvider {...methods}>
      <h1>Cadastre-se</h1>
      <Input name="name" label="Nome" />
      <Input name="email" label="E-mail" />
      <Input name="username" label="Usuário" />
      <Input name="password" label="Senha" />
      <button onClick={handleSubmit(handleOnSubmit)}>Salvar</button>
    </FormProvider>
  )
}

export default Signup
