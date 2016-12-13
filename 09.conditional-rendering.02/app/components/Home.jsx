import React, { PropTypes, Component } from 'react';
import GetFlightNumber from "./GetFlightNumber";
import Warning from "./Warning";
import BoardingPass from "./BoardingPass";
import ThankYou from "./ThankYou";
import BoardingPassPrinted from "./BoardingPassPrinted";
import AirplaneImage from "./AirplaneImage";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightNumber: "",
      goClicked: false,
      flightDelayed: true,
      printClicked: false,
      warnSet: false,
    };
    this.handleWarnSet = this.handleWarnSet.bind(this);
    this.handleFlightNumberChange = this.handleFlightNumberChange.bind(this);
    this.handleGoButtonClick = this.handleGoButtonClick.bind(this);
    this.handlePrintClicked = this.handlePrintClicked.bind(this);
  }

  handleWarnSet(value) {
    this.setState({warnSet: value})
  }

  handlePrintClicked() {
    this.setState({printClicked: true});
  }

  handleGoButtonClick() {
    this.setState({goClicked: true});
  }

  handleFlightNumberChange(event) {
    this.setState({
      flightNumber: event.target.value,
    });
  }

  render() {
    const goWasClicked = this.state.goClicked;
    const printWasClicked = this.state.printClicked;
    const enteredFlightNumber = this.state.flightNumber;
    // (A.1) - Element Variables
    let main = null;
    let thankYou = null;
    if (!goWasClicked && !printWasClicked) {
      main = <GetFlightNumber
        flightNumber={enteredFlightNumber}
        onChange={this.handleFlightNumberChange}
        onClick={this.handleGoButtonClick}
      />;
    } else if (goWasClicked && !printWasClicked) {
      main = <BoardingPass
               flightNumber={enteredFlightNumber}
               onClick={this.handlePrintClicked}
              />;
    } else {
      main = <BoardingPassPrinted />;
      thankYou = <ThankYou />
    }

    return(
      <div>
        {/*(B) - Inline If with Logical && Operator*/}
        {goWasClicked && <Warning
          warnSet={this.state.warnSet}
          handleWarnSet={this.handleWarnSet}
        />}
        {/* (A.2) */}
        {main}
        {/* (C) Inline If-Else*/}
        {!printWasClicked ? <AirplaneImage flightNumberEntered={this.state.flightNumber.length == 3} /> : null}

        {thankYou}
      </div>
    );
  }
}
