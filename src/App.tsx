import 'react-notifications/lib/notifications.css';

import { ThemeProvider } from '@material-ui/core';
import Wrapper from 'components/Wrapper';
import { ConnectedRouter } from 'connected-react-router';
import { RoutePaths } from 'constants/routePaths';
import { theme } from 'constants/theme';
import React from 'react';
import { hot } from 'react-hot-loader';
import { I18nextProvider } from 'react-i18next';
import { NotificationContainer } from 'react-notifications';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { history } from 'store/reducers';
import store from 'store/storeConfig';
import HomePage from 'templates/HomePage';
import NotesDetail from 'templates/NotesDetail';
import i18n from 'utils/locale';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <NotificationContainer />
          <ConnectedRouter history={history}>
            <Wrapper>
              <Switch>
                <Route exact path={RoutePaths.HOME}>
                  <HomePage />
                </Route>
                <Route
                  path={RoutePaths.NOTES_DETAIL}
                  render={props => <NotesDetail {...props} />}
                />
              </Switch>
            </Wrapper>
          </ConnectedRouter>
        </Provider>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default hot(module)(App);
