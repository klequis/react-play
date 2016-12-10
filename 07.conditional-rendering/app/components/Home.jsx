import React, { PropTypes, Component } from 'react';
import GetFlightNumber from "./GetFlightNumber";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightNumberEntered: false,
      flightNumber: "",
      flightDelayed: true,
      boardingPassPrinted: false,
    };
  }
  render() {
    return(
      <div>
        <GetFlightNumber />
      </div>
    );
  }
}
