import axios from 'axios'

import { INotes } from './@types'

export const getNotesRequest = (): Promise<INotes> => {
  return axios.get('https://bsc-be.herokuapp.com/notes');
} 