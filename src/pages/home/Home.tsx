import Link from 'next/link'
import Layout from '../../components/Layout'
import useAuthenticatedUser from '../../hooks/useAuthenticatedUser'

const Home: React.FC = () => {
  const { authenticatedUser } = useAuthenticatedUser()

  return (
    <Layout>
      <h1>Olá, {authenticatedUser.name}</h1>
      <Link href="/profile">profile</Link>
    </Layout>
  )
}

export default Home
