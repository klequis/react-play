import React, { PropTypes, Component } from 'react';
import Level02 from "./Level02";

const Level01 = function(props) {
  return (
    <div>
      <h1>OtherLevel02.jsx</h1>
      <p>displayText={props.displayText}</p>

      <Level02
        displayText={props.displayText}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Level01;
