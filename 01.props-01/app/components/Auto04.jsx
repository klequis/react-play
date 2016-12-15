import React from 'react';

const Welcome04 = function welcome(props) {
  return(
    <div>
      <h3>Welcome04 - using an array</h3>
      <p>Hello, {props.clientName[0]} {props.clientName[1]} {props.clientName[1]}</p>
    </div>
  )
}
// You must use 'export default' or it will not return anything
export default Welcome04;
