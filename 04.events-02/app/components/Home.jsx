import React, { PropTypes, Component } from 'react';
import Level01 from "./Level01";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: "Tri-Valley Coders",
    };
    // (D) The event is bound inside of the constructor.
    this.textChange = this.textChange.bind(this);
  }

  // (E) The event itself is created inside the class but
  //     outside of the constructor.
  textChange(event) {
    this.setState({displayText: event.target.value});
  }

  render() {

    return(
      <div>
        <p>displayText={this.state.displayText}</p>

        {/*
            (A) State is passed to the child as a property
                named 'displayText'. It is not necessary
                to pass displayText. onChange could be
                passed by itself.
            (F) The textChange event is passed to the
                child as a property named 'onChange'. We
                use this name because it instructs React
                to create an event in the DOM named
                'onchange' which is what you would do if
                writing the HTML by hand.
        */}
        <Level01
          displayText={this.state.displayText}
          onChange={this.textChange}
        />

      </div>
    );
  }// render

} // class
