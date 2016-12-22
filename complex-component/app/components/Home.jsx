import React, { PropTypes, Component } from 'react';
import ForecastDays from "./ForecastDays";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastDays: [],
    }
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    console.log(this.state.forecastDays);
    return(
      <div>
        <h1>Working</h1>
        <ForecastDays forecastDays={this.state.forecastDays} />
      </div>
    );
  }

  loadData() {
    let arr = [];
    let obj = {};
    obj = {
      first: "karl",
      last: "ecker",
    }
    arr.push(obj);
    obj = {
      first: "sophie",
      last: "ecker",
    }
    arr.push(obj);
    obj = {
      first: "daniel",
      last: "ecker",
    }
    arr.push(obj);
    console.log(arr);
    this.setState({
      forecastDays: arr,
    });
  }
}
