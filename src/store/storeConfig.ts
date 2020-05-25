import { routerMiddleware } from 'connected-react-router'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducers, { history } from 'store/reducers'
import rootSagas from 'store/sagas'

export const sagaMiddleware = createSagaMiddleware()

export const configureStore = () => {
  return createStore(rootReducers, composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware)))
}

const store = configureStore()

rootSagas.map((saga: any) => sagaMiddleware.run(saga, store.dispatch))

export default store
