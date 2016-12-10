import React from 'react';

const Welcome02 = function welcome(props) {
  return <h1>Hello {props.first} {props.last} from {props.state}</h1>;
}
// You must use 'export default' or it will not return anything
export default Welcome02;
