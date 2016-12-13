import React from 'react';

const Warning = function(props) {
  // (F) Prevent component from rendering by returning 'null'
  let randomNumber = Math.random();
  if (randomNumber < 0.5) {
    return null;
  }
  return (
    <div className="warning">
      <b>Ignore this. Things are really OK.</b>
    </div>
  );
}

export default Warning;
