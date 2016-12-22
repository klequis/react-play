import React from 'react';

const Date = function(props) {
  return (
    <div>
      <h1>{props.date.toLocaleTimeString()}</h1>
    </div>
  );
}

export default Date;
