import React, { PropTypes, Component } from 'react';
import Level01 from "./Level01";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: "Some different text",
      first: "",
      last: "",
      locationState: "",
    };
    // onChange
    this.textChange = this.textChange.bind(this);
    // onChange
    this.inputChange = this.inputChange.bind(this);
    // onSubmit
    this.Submit = this.formSubmit.bind(this);

  }

  textChange(event) {
    this.setState({displayText: event.target.value});
  }

  inputChange(event) {

    var targetId = event.target.id;
    console.log("targetId=" + targetId);

    /*
    var targetValue = event.target.value;
    // this.setState({first: targetValue});

    switch(targetId) {
      case "first":
        this.setState({first: targetValue});
        break;
      case "last":
        this.setState(last: targetValue);
        break;
      case "state":
        this.setState(locationState: targetValue);
        break;
      default:
        alert("didn't work");
        break;
    }
    */
  }

  formSubmit() {

  }

  render() {

    return(
      <div>
        <h1>OtherLevel01.jsx</h1>
        <p>displayText={this.state.displayText}</p>
        <label><b>First: </b></label><input id="first" type="edit" value={this.state.first} onChange={this.inputChange}></input><br></br>
        <label><b>Last: </b></label><input id="last" type="edit" onChange={this.inputChange}></input><br></br>
        <label><b>State: </b></label><input id="locationState" type="edit" onChange={this.inputChange}></input><br></br>
      </div>
    );
  }

} // class
