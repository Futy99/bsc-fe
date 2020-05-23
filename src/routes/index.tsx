import React from 'react';
import { Route } from 'react-router-dom';

export const createRoutes = (routes: any) => {
  return routes.map(({ exact, component: Component, path }, index) => {
    return (
      <Route
        key={index}
        exact={exact}
        path={path}
        render={props => <Component {...props} />}
      />
    );
  });
};
