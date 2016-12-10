import React from 'react';

const Message = function(props) {
  return (
    <div>
      <h1>Hello {props.first} {props.last} from {props.stateName}</h1>
    </div>
  );
}

export default Message;
