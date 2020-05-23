import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { combineReducers } from 'redux'
import { reducer as note } from 'store/modules/note'
import { reducer as notes } from 'store/modules/notes'

import { INoteReducer } from './modules/note/@types'
import { INotesReducer } from './modules/notes/@types'

export interface IRedux {
  notes: INotesReducer;
  note: INoteReducer;
}

export const history = createBrowserHistory()

export default combineReducers({
  note,
  notes,
  router: connectRouter(history),
})
