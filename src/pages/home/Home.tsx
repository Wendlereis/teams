import Link from 'next/link'
import useAuthenticatedUser from '../../hooks/useAuthenticatedUser'

const Home: React.FC = () => {
  const { authenticatedUser } = useAuthenticatedUser()

  return (
    <>
      <h1>Olá, {authenticatedUser.name}</h1>

      <Link href="/create-event">
        <a>Criar evento</a>
      </Link>

      <Link href="/profile">
        <a>Meu perfil</a>
      </Link>
    </>
  )
}

export default Home
