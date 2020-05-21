import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { combineReducers } from 'redux'
import { reducer as notes } from 'store/modules/notes'

export const history = createBrowserHistory()

export default combineReducers({
  notes,
  router: connectRouter(history),
})
