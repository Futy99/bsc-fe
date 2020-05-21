import { INotes } from './@types'

export enum Types {
  GET_NOTES = 'notes/GET_NOTES',
  GET_NOTES_SUCCESS = 'notes/GET_NOTES_SUCCESS',
  GET_NOTES_FAILURE = 'notes/GET_NOTES_FAILURE',

}

export const getNotes = () => {
  return {
    type: Types.GET_NOTES,
  }
}

export const getNotesSuccess = (notes: INotes[]) => {
  return {
    type: Types.GET_NOTES_SUCCESS,
    payload: { notes },
  }
}

export const getNotesFailure = () => {
  return {
    type: Types.GET_NOTES_FAILURE,
  }
}