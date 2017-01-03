"use strict";

import React, { PropTypes, Component } from 'react';
import Axios from "axios";
import Utils from "../lib/ke-utils";


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ipAddress: "",
      city: "",
      region: "",
      country: "",
      loc: "",
      postal: "",
    }
  }

  componentDidMount() {
    Utils.logFunction("componentDidMount");
    let _this = this;

    let url1 = "http://ipinfo.io/json";
    let url2 = "https://api.ipify.org?format=json";
    let url3 = "http://api.openweathermap.org/data/2.5/weather?q=dublin,us&units=imperial&APPID=cd605b9a7b8b517b82492ee7bf47a295";

    this.getData(url1, function(response) {

      Utils.log("one");
      console.log(response.data);
      _this.setState({
        ipAddress: response.data.ip,
        city: response.data.city,
        region: response.data.region,
        country: response.data.country,
        loc: response.data.loc,
        postal: response.data.postal,
      });
    });
    this.getData(url2, function(response) {
      Utils.log("two");
      console.log(response.data);
    });
    this.getData(url3, function(response) {
      Utils.log("three");
      console.log(response.data);
    });
  }

  getData(url, callback) {
    Utils.logFunction("getData");
    Axios.get(url)
      .then((response) => {
        callback(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    console.log("render");
    return(
      <div>
        <h1>ipInfo</h1>
        <p>ipAddress: {this.state.ipAddress}</p>
        <p>City: {this.state.city}</p>
        <p>Region: {this.state.region}</p>
        <p>Country: {this.state.country}</p>
        <p>Loc: {this.state.loc}</p>
        <p>Postal: {this.state.postal}</p>
      </div>
    );
  }
}
