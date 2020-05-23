import { RoutePaths } from 'constants/routePaths';
import React from 'react';
import HomePage from 'screens/HomePage';
import NotesDetail from 'screens/NotesDetail';

export default [
  {
    path: RoutePaths.HOME,
    exact: true,
    component: () => <HomePage />,
  },
  {
    path: RoutePaths.NOTES_DETAIL,
    exact: false,
    component: () => <NotesDetail />,
  },
];
