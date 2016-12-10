import React from "react";

const Level03 = function(props) {
  return (
    <div>
      <h2>Level03.jsx</h2>
      <p>displayText={props.displayText}</p>

      <input value={props.displayText}  onChange={props.onChange}/>
    </div>
  );
}

export default Level03;
