import axios from 'axios'

const teamsApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TEAMS_API,
})

teamsApi.interceptors.request.use(
  config => {
    const token = localStorage.getItem('@teams:authToken')

    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      },
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export { teamsApi }
