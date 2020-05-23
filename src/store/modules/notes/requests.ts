import axios from 'axios'

import { INote } from './@types'

export const getNotesRequest = (): Promise<INote> => {
  return axios.get('https://bsc-be.herokuapp.com/notes');
}

export const deleteNotesRequest = (id: string): Promise<INote> => {
  return axios.delete('https://bsc-be.herokuapp.com/notes', {
    params: {
      id,
    },
    headers: {
      Accept: 'application/json',
    },
  })
}