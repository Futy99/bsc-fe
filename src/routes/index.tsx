import React from 'react'
import { Route } from 'react-router-dom'

export const createRoutes = (routes: any) => {
  return routes.map(({ component: Component, path }, index) => {
    return <Route key={index} path={path} render={props => <Component {...props} />} />
  })
}