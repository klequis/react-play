import React, { Component } from 'react';
import Auto01 from "./Auto01";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h3>Home is a class component</h3>
        <Auto01 make="Ferrari"/>
      </div>
    );
  }
}
