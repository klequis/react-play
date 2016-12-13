import React from "react";

const Message = function(props) {
  if (props.flag) {
    return <h1>Hello</h1>;
  } else {
    return <h1>Good Bye</h1>;
  }
}
export default Message;
