import React, { PropTypes, Component } from 'react';
import Message from "./Message";
import CurrentDate from "./CurrentDate";

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "Karl",
      last: "Ecker",
      stateName: "California",
      date: new Date(),
      toggleColor: false,
    };
    // (A)
    // You must bind the event handler to the class
    // Binding is done inside the constructor
    this.toggleColorClick = this.toggleColorClick.bind(this);
  }
  // (B) event handler goes inside the class but outside of the constructor
  toggleColorClick() {
    // (C) Do not change state directly, use setState()
    // (D) 'prevState' is a React object that represents the state before it is changed
    // This function switches 'toggleColor' between true & false
    this.setState(prevState => ({
      toggleColor: !prevState.toggleColor
    }));
  }
  render() {
    let colorClass;
    if (this.state.toggleColor) {
      colorClass = "button-black";
    } else {
      colorClass = "";
    }
    return(
      <div>
        <Message
          first={this.state.first} last={this.state.last} stateName={this.state.stateName} />
        {/* (E)
          The colorClass variable is embedded in teh JSX.
          To embed JavaScript in JSX, put the JavaScript in {}.
        */}

        <button className={colorClass} onClick={this.toggleColorClick}>Toggle Color</button>
        <CurrentDate date={this.state.date} />
      </div>
    );
  }
}
