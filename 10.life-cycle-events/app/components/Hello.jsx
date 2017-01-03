"use strict";

import React from 'react';
import Utils from "../lib/ke-utils.js";

export default class Hello extends React.Component {
  constructor(props) {
    Utils.logFunction("Hello.constructor");
    super(props);
    this.state = {
      bcity: "",
      testState: "",
    };
  }

  componentDidMount() {
    Utils.logFunction("Hello.componentDidMount");

    Utils.log("setState");
    this.setState({
      testState: "New York",
    })
  }

  componentWillReceiveProps(nextProps) {
    Utils.logFunction("Hello.componentWillReceiveProps");
  }

  componentWillUpdate(nextProps, nextState) {
    Utils.logFunction("Hello.componentWillUpdate");
  }

  render() {
    Utils.logFunction("Hello.render")
    return(
      <div>
        <h1>HELLO</h1>
        <h1>{this.state.testState}</h1>
      </div>
    )
  }


} // class
