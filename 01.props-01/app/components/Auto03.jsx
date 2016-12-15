import React from 'react';

const Auto03 = function Auto(props) {
  return(
    <div>
      <h3>Auto03 - using an object</h3>
      <p>My car is a {props.car.make} {props.car.model} {props.car.type}</p>
    </div>
  )
}
// You must use 'export default' or it will not return anything
export default Auto03;
