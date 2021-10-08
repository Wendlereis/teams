import { useMutation, useQuery } from 'react-query'
import { FormProvider, useForm } from 'react-hook-form'

import { Container, Button, Typography, Grid } from '@mui/material'

import Input from '../../components/Input'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'

import { IUser } from '../../interfaces/IUser'

import useAuthenticatedUser from '../../hooks/useAuthenticatedUser'

import { getUserById, updateUser } from '../../api/user'

import * as S from './styles'

const Profile: React.FC = () => {
  const methods = useForm()

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
    <Layout>
      <Container>
        <PageTitle title="Perfil" subtitle="Mantenha seu perfil atualizado." />

        <FormProvider {...methods}>
          <S.Form>
            <S.BoardWrapper>
              <S.BoardTitle variant="h5">Dados Pessoais</S.BoardTitle>

              <S.Board>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Input
                      name="name"
                      label="Nome completo"
                      options={{
                        disabled: true,
                        defaultValue: String(getUserResponse?.data?.name),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Input
                      name="birth_date"
                      label="Data de aniversário"
                      options={{
                        defaultValue: getUserResponse?.data?.birth_date,
                      }}
                    />
                  </Grid>
                </Grid>
              </S.Board>
            </S.BoardWrapper>

            <S.BoardWrapper>
              <S.BoardTitle variant="h5">Endereço</S.BoardTitle>

              <S.Board>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={10}>
                    <Input
                      name="address.street"
                      label="Rua"
                      options={{
                        defaultValue: getUserResponse?.data?.address.street,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={2}>
                    <Input
                      name="address.number"
                      label="Número"
                      options={{
                        defaultValue: String(getUserResponse?.data?.address.number),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Input
                      name="address.complement"
                      label="Complemento"
                      options={{
                        defaultValue: getUserResponse?.data?.address.complement,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={8}>
                    <Input
                      name="address.neighbourhood"
                      label="Bairro"
                      options={{
                        defaultValue: getUserResponse?.data?.address.neighbourhood,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Input
                      name="address.city"
                      label="Cidade"
                      options={{
                        defaultValue: getUserResponse?.data?.address.city,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Input
                      name="address.state"
                      label="Estado"
                      options={{
                        defaultValue: getUserResponse?.data?.address.state,
                      }}
                    />
                  </Grid>
                </Grid>
              </S.Board>
            </S.BoardWrapper>

            <S.BoardWrapper>
              <S.BoardTitle variant="h5">Contato</S.BoardTitle>

              <S.Board>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Input
                      name="phone.landline_phone"
                      label="Telefone fixo"
                      options={{
                        defaultValue: getUserResponse?.data?.phone.landline_phone,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Input
                      name="phone.mobile_phone"
                      label="Celular"
                      options={{
                        defaultValue: getUserResponse?.data?.phone.mobile_phone,
                      }}
                    />
                  </Grid>
                </Grid>
              </S.Board>
            </S.BoardWrapper>

            <S.BoardWrapper>
              <S.BoardTitle variant="h5">Acesso</S.BoardTitle>

              <S.Board>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Input
                      name="username"
                      label="Usuário"
                      options={{
                        defaultValue: getUserResponse?.data?.username,
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Input name="password" label="Senha" />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Input
                      name="email"
                      label="E-mail"
                      options={{
                        defaultValue: getUserResponse?.data?.email,
                      }}
                    />
                  </Grid>
                </Grid>
              </S.Board>
            </S.BoardWrapper>

            <S.ButtonWrapper>
              <Button variant="contained" size="large" onClick={methods.handleSubmit(handleOnSubmit)}>
                Salvar
              </Button>
            </S.ButtonWrapper>
          </S.Form>
        </FormProvider>
      </Container>
    </Layout>
  )
}

export default Profile
