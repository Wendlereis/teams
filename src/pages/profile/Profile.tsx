import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'

import { IUserProfileRequest } from '../../interfaces/IUser'

import { getUserById, updateUserById } from '../../api/user'

const Profile: React.FC = () => {
  const { handleSubmit, register } = useForm()

  const { data, isLoading } = useQuery('user', () => getUserById(2))

  const [updateProfileMutation] = useMutation(updateUserById)

  function handleUpdateProfile(user: IUserProfileRequest) {
    updateProfileMutation({ ...user, id: '2' })
  }

  if (isLoading) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <h1>Edite seu perfil</h1>

      <input type="number" name="age" ref={register} />

      <button onClick={handleSubmit(handleUpdateProfile)}>Salvar</button>

      {data && JSON.stringify(data.data)}
    </>
  )
}

export default Profile
