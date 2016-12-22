import React, { PropTypes, Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "default",
    };
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    console.log("> buttonClick()");
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
    console.log(">> newCity=" + newCity);
    this.setState({city: newCity});
    console.log(">> this.state.city=" + this.state.city);
  }

  render() {
    return(
      <div>
        <button onClick={this.buttonClick}>Click</button>
        <h1>City is {this.state.city}</h1>
      </div>
    );
  }
}
