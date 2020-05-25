import 'react-notifications/lib/notifications.css'

import { ThemeProvider } from '@material-ui/core'
import Wrapper from 'components/Wrapper'
import { ConnectedRouter } from 'connected-react-router'
import { RoutePaths } from 'constants/routePaths'
import { theme } from 'constants/theme'
import React from 'react'
import { hot } from 'react-hot-loader'
import { I18nextProvider } from 'react-i18next'
import { NotificationContainer } from 'react-notifications'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from 'screens/HomePage'
import NotesDetail from 'screens/NotesDetail'
import { history } from 'store/reducers'
import store from 'store/storeConfig'
import i18n from 'utils/locale'

// Had to use hash router inside connected router in order to make router working in production build

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <NotificationContainer />
          <ConnectedRouter history={history}>
            <Router>
              <Wrapper>
                <Switch>
                  <Route exact path={RoutePaths.HOME}>
                    <HomePage />
                  </Route>
                  <Route path={RoutePaths.NOTES_DETAIL} render={props => <NotesDetail {...props} />} />
                </Switch>
              </Wrapper>
            </Router>
          </ConnectedRouter>
        </Provider>
      </I18nextProvider>
    </ThemeProvider>
  )
}

export default hot(module)(App)
