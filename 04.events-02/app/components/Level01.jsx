import React, { PropTypes, Component } from 'react';
import Level02 from "./Level02";

const Level01 = function(props) {
  return (
    <div>
      <h2>Level01.jsx</h2>
      <p>displayText={props.displayText}</p>

      {/*
          (B) The property 'displayText' is passed to the
              child.
          (G) Note that the name 'textChange' is no longer
              here. It was passed in as a property named
              'onChange', so onChange is textChange.
      */}
      <Level02
        displayText={props.displayText}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Level01;
