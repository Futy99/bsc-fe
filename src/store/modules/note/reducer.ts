import createReducer from 'utils/createReducer'

import { INoteReducer } from './@types'
import * as actions from './actions'

export const initialState: INoteReducer = {
  data: null,
  loading: false,
  submitting: false,
  error: null,
}

export default createReducer(initialState, {
  // GET
  [actions.Types.GET_NOTE]: (state: INoteReducer): INoteReducer => {
    return {
      ...state,
      loading: true,
    }
  },
  [actions.Types.GET_NOTE_SUCCESS]: (state: INoteReducer, action: ReturnType<typeof actions.getNoteSuccess>): INoteReducer => {
    const { note } = action.payload
    return {
      ...state,
      loading: false,
      data: note,
      error: null,
    }
  },
  [actions.Types.GET_NOTE_FAILURE]: (state: INoteReducer, action: ReturnType<typeof actions.getNoteFailure>): INoteReducer => {
    const { error } = action.payload
    return {
      ...state,
      loading: false,
      error,
    }
  },
  // UPDATE
  [actions.Types.UPDATE_NOTE]: (state: INoteReducer): INoteReducer => {
    return {
      ...state,
      submitting: true,
    }
  },
  [actions.Types.UPDATE_NOTE_SUCCESS]: (state: INoteReducer, action: ReturnType<typeof actions.updateNoteSuccess>): INoteReducer => {
    const { note } = action.payload
    return {
      ...state,
      data: note,
      submitting: false,
      error: null,
    }
  },
  [actions.Types.UPDATE_NOTE_FAILURE]: (state: INoteReducer): INoteReducer => {
    return {
      ...state,
      submitting: false,
    }
  },
})
