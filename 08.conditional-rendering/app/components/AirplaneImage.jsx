import React from 'react';

const AirplaneImage = function(props) {
  // (C) - Inline If-Else

  let airplaneRed = "/app/public/img/airplane-red.jpg";
  let airplaneGreen = "/app/public/img/airplane-green.jpg";

  return (
    props.flightNumberEntered ? (
      <img className="airplane-image" src={airplaneGreen} />
    ) : (
      <img className="airplane-image" src={airplaneRed} />
    )
  )
}

export default AirplaneImage;
