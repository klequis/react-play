import React from 'react';

const Auto02 = function Auto(props) {
  return (
    <div>
      <h3>Auto02 - using three props</h3>
      <p>My car is a {props.make} {props.model} {props.type}</p>
    </div>
  )
}
// You must use 'export default' or it will not return anything
export default Auto02;
