import { RoutePaths } from 'constants/routePaths'
import * as React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <h1>Hello, homePage!</h1>
      <Link to={RoutePaths.NOTES_DETAIL}>Navigate to notes</Link>
    </>
  );
};

export default HomePage;