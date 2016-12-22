import React, { PropTypes, Component } from 'react';
import Message from "./Message";
import CurrentDate from "./CurrentDate";

// 'export default' is not part of the class declaration
export default class Welcome extends Component {
  constructor(props) {
    // Per Facebook, a class should always
    // call the base/parent constructor with 'props'
    super(props);
    // 'state' is an object
    this.state = {
      first: "Karl",
      last: "Ecker",
      stateName: "California",
      date: new Date(),
    };
  }
  render() {
    return(
      <div>
        <Message
          first={this.state.first} last={this.state.last} stateName={this.state.stateName} />
        <CurrentDate date={this.state.date} />
      </div>
    );
  }
}
