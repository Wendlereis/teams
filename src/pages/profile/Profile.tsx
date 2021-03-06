import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'

import useAuthenticatedUser from '../../hooks/useAuthenticatedUser'

import { getUserById, updateUserById } from '../../api/user'

import { IUser } from '../../interfaces/IUser'

const Profile: React.FC = () => {
  const { authenticatedUser } = useAuthenticatedUser()

  const { handleSubmit, register } = useForm()

  const { data: getUserByIdResponse, isLoading } = useQuery('user', () => getUserById(authenticatedUser.id))

  const [updateProfileMutation] = useMutation(updateUserById)

  function handleUpdateProfile(user: IUser) {
    updateProfileMutation({ ...user, id: authenticatedUser.id })
  }

  if (isLoading) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <h1>Edite seu perfil</h1>

      <input type="text" name="name" placeholder="Nome" defaultValue={getUserByIdResponse?.data.name} ref={register} />

      <input
        type="text"
        name="birth_date"
        placeholder="Data de nascimento"
        defaultValue={getUserByIdResponse?.data.birth_date || ''}
        ref={register}
      />

      <input
        type="text"
        name="address.street"
        placeholder="Enderecp"
        defaultValue={getUserByIdResponse?.data.address?.street}
        ref={register}
      />

      <input
        type="number"
        name="address.number"
        placeholder="Número"
        defaultValue={getUserByIdResponse?.data.address?.number}
        ref={register}
      />

      <input
        type="text"
        name="address.complement"
        placeholder="Complemento"
        defaultValue={getUserByIdResponse?.data.address?.complement}
        ref={register}
      />

      <input
        type="text"
        name="address.neighbourhood"
        placeholder="Bairro"
        defaultValue={getUserByIdResponse?.data.address?.neighbourhood}
        ref={register}
      />

      <input
        type="text"
        name="address.state"
        placeholder="Estado"
        defaultValue={getUserByIdResponse?.data.address?.state}
        ref={register}
      />

      <input
        type="text"
        name="address.city"
        placeholder="Cidade"
        defaultValue={getUserByIdResponse?.data.address?.city}
        ref={register}
      />

      <input
        type="tel"
        name="phone.mobile_phone"
        placeholder="Celular"
        defaultValue={getUserByIdResponse?.data.phone?.mobile_phone}
        ref={register}
      />

      <input
        type="tel"
        name="phone.landline_phone"
        placeholder="Telefone fixo"
        defaultValue={getUserByIdResponse?.data.phone?.landline_phone}
        ref={register}
      />

      <input
        type="text"
        name="username"
        placeholder="Usuário"
        defaultValue={getUserByIdResponse?.data.username}
        ref={register}
      />

      <input type="text" name="email" ref={register} placeholder="E-mail" defaultValue={getUserByIdResponse?.data.email} />

      <input
        type="password"
        name="password"
        placeholder="Senha"
        defaultValue={getUserByIdResponse?.data.password}
        ref={register}
      />

      <button onClick={handleSubmit(handleUpdateProfile)}>Salvar</button>
    </>
  )
}

export default Profile
