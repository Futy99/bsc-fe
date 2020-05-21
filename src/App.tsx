import { ThemeProvider } from '@material-ui/core'
import { ConnectedRouter } from 'connected-react-router'
import { RoutePaths } from 'constants/routePaths'
import { theme } from 'constants/theme'
import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { history } from 'store/reducers'
import store from 'store/storeConfig'
import HomePage from 'templates/HomePage'
import NotesDetail from 'templates/NotesDetail'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path={RoutePaths.HOME}>
              <HomePage/>
            </Route>
            <Route path={RoutePaths.NOTES_DETAIL}>
              <NotesDetail/>
            </Route>
          </Switch>
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default hot(module)(App);