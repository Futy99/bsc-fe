import { RoutePaths } from 'constants/routePaths'

export default [
  {
    path: RoutePaths.HOME,
    component: () => import('../screens/HomePage'),
  },
  {
    path: RoutePaths.NOTES_DETAIL,
    component: () => import('../screens/NotesDetail'),
  },
]
