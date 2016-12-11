import React from 'react';

const GetFlightNumber = function(props) {
  return (
    <div>
      <h2>Boarding Pass</h2>
      <b>Flight #:</b> {props.flightNumber}<br></br>
      <b>Gate:</b> C4<br></br>
      <b>Departure:</b> 13:26<br></br>
      <button onClick={props.onClick}>Print</button>
    </div>
  );
}

export default GetFlightNumber;
