import Link from 'next/link'
import { Container, Typography } from '@mui/material'

import Layout from '../../components/Layout'
import useAuthenticatedUser from '../../hooks/useAuthenticatedUser'

const Home: React.FC = () => {
  const { authenticatedUser } = useAuthenticatedUser()

  return (
    <Layout>
      <Container>
        <Typography>Olá, {authenticatedUser.name}</Typography>
        <Link href="/profile">profile</Link>
      </Container>
    </Layout>
  )
}

export default Home
