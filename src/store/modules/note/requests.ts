import axios from 'axios';

import { INote } from '../notes/@types';

export const getNoteRequest = (id: string): Promise<INote> => {
  return axios.get('https://bsc-be.herokuapp.com/note', {
    params: {
      id,
    },
    headers: {
      Accept: 'application/json',
    },
  });
};

export const updateNoteRequest = (id: string, text: string): Promise<INote> => {
  return axios.post('https://bsc-be.herokuapp.com/notes', {
    params: {
      id,
      note: text,
    },
    headers: {
      Accept: 'application/json',
    },
  });
};
