import axios from 'axios'

export const teamsApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TEAMS_API,
})
