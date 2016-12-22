import React from 'react';

const Auto01 = function Auto(props) {
  return (
    <div>
      <h3>Auto01 - is a functional component</h3>
      <p>My car is a {props.make}</p>
    </div>
  )
}
// You must use 'export default' or it will not return anything
export default Auto01;
