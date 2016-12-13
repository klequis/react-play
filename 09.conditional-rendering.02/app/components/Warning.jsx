import React from 'react';

const Warning = function(props) {
  // (F) Prevent component from rendering by returning 'null'
  if (!props.warnSet) {
    props.handleWarnSet(true);
    let randomNumber = Math.random();
    if (randomNumber < 0.5) {
      return null;
    }
  }
  return (
    <div className="warning">
      <b>Your flight has been delayed - bummer!</b>
    </div>
  );
}

export default Warning;
