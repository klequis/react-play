import React, { PropTypes, Component } from 'react';
import Level02 from "./Level02";

const Level01 = function(props) {
  return (
    <div>
      <h1>Level01.jsx</h1>
      <div className="back--primary" onDoubleClick={props.onDoubleClick}>
        <br></br>
        <p>Double-click this div</p>
        <br></br>
      </div>
      <Level02
        displayText={props.displayText}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Level01;
