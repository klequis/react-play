import React from "react";

const Level03 = function(props) {
  return (
    <div>
      <h2>Level03.jsx</h2>
      <p>displayText={props.displayText}</p>

      {/*
          (I) The onChange property is used in the input
              element. React will create an 'onchange'
              event in the DOM. Use your DOM inspector to
              see it.
      */}
      <input value={props.displayText}  onChange={props.onChange}/>
    </div>
  );
}

export default Level03;
