import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'

import { IUser } from '../../interfaces/IUser'

import useAuthenticatedUser from '../../hooks/useAuthenticatedUser'

import { getUserById, updateUser } from '../../api/user'

const Profile: React.FC = () => {
  const { handleSubmit, register } = useForm()

  const { authenticatedUser } = useAuthenticatedUser()

  const { data: getUserResponse, isLoading, error } = useQuery('user', () => getUserById(authenticatedUser.id))

  const [updateUserMutation] = useMutation(updateUser)

  async function handleOnSubmit(user: IUser) {
    await updateUserMutation({
      ...user,
      id: authenticatedUser.id,
    })
  }

  if (isLoading) {
    return <h2>Carregando perfil</h2>
  }

  if (error) {
    return <h2>Erro ao carregar perfil</h2>
  }

  return (
    <main>
      <h1>Perfil</h1>

      <input
        name="name"
        type="text"
        ref={register}
        placeholder="Nome"
        disabled={true}
        defaultValue={getUserResponse?.data.name}
      />

      <input
        name="age"
        type="text"
        ref={register}
        placeholder="Idade"
        disabled={true}
        defaultValue={getUserResponse?.data.age}
      />

      <input
        name="birth_date"
        type="text"
        ref={register}
        placeholder="Data de nascimento"
        defaultValue={getUserResponse?.data.birth_date}
      />

      <input
        name="address.street"
        type="text"
        ref={register}
        placeholder="Rua"
        defaultValue={getUserResponse?.data.address.street}
      />

      <input
        name="address.number"
        type="text"
        ref={register}
        placeholder="Número"
        defaultValue={getUserResponse?.data.address.number}
      />

      <input
        name="address.complement"
        type="text"
        ref={register}
        placeholder="Complemento"
        defaultValue={getUserResponse?.data.address.complement}
      />

      <input
        name="address.neighbourhood"
        type="text"
        ref={register}
        placeholder="Bairro"
        defaultValue={getUserResponse?.data.address.neighbourhood}
      />

      <input
        name="address.city"
        type="text"
        ref={register}
        placeholder="Cidade"
        defaultValue={getUserResponse?.data.address.city}
      />

      <input
        name="address.state"
        type="text"
        ref={register}
        placeholder="Estado"
        defaultValue={getUserResponse?.data.address.state}
      />

      <input
        name="phone.landline_phone"
        type="text"
        ref={register}
        placeholder="Telefone fixo"
        defaultValue={getUserResponse?.data.phone.landline_phone}
      />

      <input
        name="phone.mobile_phone"
        type="text"
        ref={register}
        placeholder="Celular"
        defaultValue={getUserResponse?.data.phone.mobile_phone}
      />

      <input name="email" type="text" ref={register} placeholder="E-mail" defaultValue={getUserResponse?.data.email} />

      <input
        name="username"
        type="text"
        ref={register}
        placeholder="Usuário"
        defaultValue={getUserResponse?.data.username}
      />

      <input name="password" type="password" ref={register} placeholder="Senha" />

      <button onClick={handleSubmit(handleOnSubmit)}>Salvar</button>
    </main>
  )
}

export default Profile
