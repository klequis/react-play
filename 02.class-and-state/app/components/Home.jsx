import React, { PropTypes, Component } from 'react';
import Welcome from "./Welcome";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Welcome />
    );
  }
}
