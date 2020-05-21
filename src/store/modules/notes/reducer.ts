import createReducer from 'utils/createReducer'

import { INotesReducer } from './@types'
import * as actions from './actions'

export const initialState: INotesReducer = {
  data: [],
  loading: false,
}

export default createReducer(initialState, {
  [actions.Types.GET_NOTES]: (
    state: INotesReducer,
  ): INotesReducer => {
    return {
      ...state,
      loading: true,
    }
  },
  [actions.Types.GET_NOTES_SUCCESS]: (
    state: INotesReducer,
    action: ReturnType<typeof actions.getNotesSuccess>,
  ): INotesReducer => {
    const { notes } = action.payload
    return {
      ...state,
      loading: false,
      data: notes,
    }
  },
  [actions.Types.GET_NOTES_FAILURE]: (
    state: INotesReducer,
  ): INotesReducer => {
    return {
      ...state,
      loading: false,
    }
  },
})