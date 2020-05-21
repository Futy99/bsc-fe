import { RoutePaths } from 'constants/routePaths'
import * as React from 'react'
import { Link } from 'react-router-dom'

const NotesDetail = () => {
  return (
    <>
      <h1>Hello, NotesDetail!</h1>
      <Link to={RoutePaths.HOME}>Navigate to homepage</Link>
    </>
  );
};

export default NotesDetail;