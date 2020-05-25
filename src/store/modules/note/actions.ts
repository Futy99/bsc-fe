import { INote } from '../notes/@types'

export enum Types {
  GET_NOTE = 'note/GET_NOTE',
  GET_NOTE_SUCCESS = 'note/GET_NOTE_SUCCESS',
  GET_NOTE_FAILURE = 'note/GET_NOTE_FAILURE',
  UPDATE_NOTE = 'note/UPDATE_NOTE',
  UPDATE_NOTE_SUCCESS = 'note/UPDATE_NOTE_SUCCESS',
  UPDATE_NOTE_FAILURE = 'note/UPDATE_NOTE_FAILURE',
}

export const getNote = (id: string) => {
  return {
    type: Types.GET_NOTE,
    payload: { id },
  }
}

export const getNoteSuccess = (note: INote) => {
  return {
    type: Types.GET_NOTE_SUCCESS,
    payload: { note },
  }
}

export const getNoteFailure = (error: Error) => {
  return {
    type: Types.GET_NOTE_FAILURE,
    payload: { error },
  }
}

export const updateNote = (id: string, text: string) => {
  return {
    type: Types.UPDATE_NOTE,
    payload: { id, text },
  }
}

export const updateNoteSuccess = (note: INote) => {
  return {
    type: Types.UPDATE_NOTE_SUCCESS,
    payload: { note },
  }
}

export const updateNoteFailure = () => {
  return {
    type: Types.UPDATE_NOTE_FAILURE,
  }
}
