import * as React from 'react'

import { HelloText } from './styled'

export interface HelloProps { compiler: string; framework: string; }

const Hello = (props: HelloProps) => {
  return (
    <>
      <HelloText>Hello, Hello from {props.compiler} and {props.framework}!</HelloText>
    </>
  );
};

export default Hello;