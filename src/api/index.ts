import axios from 'axios'

export const teamsApi = axios.create({
  baseURL: 'http://localhost:3333',
})
