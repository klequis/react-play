import React from 'react';

const GetFlightNumber = function(props) {
  // (E) - Simple 'if'
  let colorClass;
  if (props.flightNumber.length == 3) {
    colorClass = "good-flight-number";
  } else {
    colorClass = "bad-flight-number";
  }
  return (

    <div>
      <h2>Please enter your flight number</h2>
      <b>Flight #:</b> <input className={colorClass} onChange={props.onChange} placeholder="e.g., 012"/>
      <button onClick={props.onClick}>Go</button>
    </div>
  );
}

export default GetFlightNumber;
