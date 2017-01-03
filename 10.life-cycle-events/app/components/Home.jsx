"use strict";
import React, { PropTypes, Component } from 'react';
import Utils from "../lib/ke-utils.js";
import Hello from "./Hello";

export default class Home extends Component {
  constructor(props) {
    Utils.logFunction("Home.constructor");
    super(props);
    this.state = {
      city: "default",
    };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    Utils.logFunction("Home.buttonClick");
    let newCity = "";
    switch (this.state.city) {
      case "default":
        newCity = "boston";
        break;
      case "boston":
        newCity = "new york";
        break;
      default:
        newCity = "darn it";
    }
    Utils.log(">> newCity=" + newCity);
    this.setState({city: newCity});
    Utils.log(">> this.state.city=" + this.state.city);
  }

  render() {
    Utils.logFunction("Home.render");
    return(
      <div>
        <button onClick={this.buttonClick}>Click</button>
        <h1>City is {this.state.city}</h1>
        <Hello />
      </div>
    );
  }
}
