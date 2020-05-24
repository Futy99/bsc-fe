import { INote } from './@types';

export enum Types {
  GET_NOTES = 'notes/GET_NOTES',
  GET_NOTES_SUCCESS = 'notes/GET_NOTES_SUCCESS',
  GET_NOTES_FAILURE = 'notes/GET_NOTES_FAILURE',

  DELETE_NOTE = 'notes/DELETE_NOTE',
  DELETE_NOTE_SUCCESS = 'notes/DELETE_NOTE_SUCCESS',
  DELETE_NOTE_FAILURE = 'notes/DELETE_NOTE_FAILURE',

  ADD_NOTE = 'notes/ADD_NOTE',
  ADD_NOTE_SUCCESS = 'notes/ADD_NOTE_SUCCESS',
  ADD_NOTE_FAILURE = 'notes/ADD_NOTE_FAILURE',
}

export const getNotes = () => {
  return {
    type: Types.GET_NOTES,
  };
};

export const getNotesSuccess = (notes: INote[]) => {
  return {
    type: Types.GET_NOTES_SUCCESS,
    payload: { notes },
  };
};

export const getNotesFailure = (error: Error) => {
  return {
    type: Types.GET_NOTES_FAILURE,
    payload: { error },
  };
};

export const deleteNote = (id: string) => {
  return {
    type: Types.DELETE_NOTE,
    payload: { id },
  };
};

export const deleteNoteSuccess = (notes: INote[]) => {
  return {
    type: Types.DELETE_NOTE_SUCCESS,
    payload: { notes },
  };
};

export const deleteNoteFailure = () => {
  return {
    type: Types.DELETE_NOTE_FAILURE,
  };
};

export const addNote = (text: string) => {
  return {
    type: Types.ADD_NOTE,
    payload: { text },
  };
};

export const addNoteSuccess = (note: INote) => {
  return {
    type: Types.ADD_NOTE_SUCCESS,
    payload: { note },
  };
};

export const AddNoteFailure = () => {
  return {
    type: Types.ADD_NOTE_FAILURE,
  };
};
