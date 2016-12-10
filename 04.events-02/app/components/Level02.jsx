import React from 'react';
import Level03 from "./Level03"

const Level02 = function(props) {
  return (
    <div>
      <h2>Level02.jsx</h2>
      <p>displayText={props.displayText}</p>
        {/*
            (C) And again, the property 'displayText' is
                passed to the child.
            (H) Again, onChange is passed to the child.
        */}
      <Level03
        displayText={props.displayText}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Level02;
