import createReducer from 'utils/createReducer'

import { INotesReducer } from './@types'
import * as actions from './actions'

export const initialState: INotesReducer = {
  data: [],
  loading: false,
  submitting: false,
  error: null,
}

export default createReducer(initialState, {
  // GET
  [actions.Types.GET_NOTES]: (state: INotesReducer): INotesReducer => {
    return {
      ...state,
      loading: true,
    }
  },
  [actions.Types.GET_NOTES_SUCCESS]: (state: INotesReducer, action: ReturnType<typeof actions.getNotesSuccess>): INotesReducer => {
    const { notes } = action.payload
    return {
      ...state,
      loading: false,
      data: notes,
      error: null,
    }
  },
  [actions.Types.GET_NOTES_FAILURE]: (state: INotesReducer, action: ReturnType<typeof actions.getNotesFailure>): INotesReducer => {
    const { error } = action.payload
    return {
      ...state,
      loading: false,
      error,
    }
  },
  // DELETE
  [actions.Types.DELETE_NOTE]: (state: INotesReducer): INotesReducer => {
    return {
      ...state,
      submitting: true,
    }
  },
  [actions.Types.DELETE_NOTE_SUCCESS]: (state: INotesReducer, action: ReturnType<typeof actions.deleteNoteSuccess>): INotesReducer => {
    const { notes } = action.payload
    return {
      ...state,
      submitting: false,
      data: notes,
    }
  },
  [actions.Types.DELETE_NOTE_FAILURE]: (state: INotesReducer): INotesReducer => {
    return {
      ...state,
      submitting: false,
    }
  },
  // ADD
  [actions.Types.ADD_NOTE]: (state: INotesReducer): INotesReducer => {
    return {
      ...state,
      submitting: true,
    }
  },
  [actions.Types.ADD_NOTE_SUCCESS]: (state: INotesReducer, action: ReturnType<typeof actions.addNoteSuccess>): INotesReducer => {
    const { note } = action.payload
    return {
      ...state,
      data: [...state.data, note],
      error: null,
      submitting: false,
    }
  },
  [actions.Types.ADD_NOTE_FAILURE]: (state: INotesReducer): INotesReducer => {
    return {
      ...state,
      submitting: false,
    }
  },
})
