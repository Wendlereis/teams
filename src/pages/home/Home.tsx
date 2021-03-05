import useAuthenticatedUser from '../../hooks/useAuthenticatedUser'

const Home: React.FC = () => {
  const { authenticatedUser } = useAuthenticatedUser()

  return <h1>Olá, {authenticatedUser.name}</h1>
}

export default Home
